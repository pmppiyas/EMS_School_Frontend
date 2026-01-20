import { jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';
import { getDefaultDashboardRoutes, getRouteOwner } from './lib/auth';
import { env } from './config/env';
import { IRole } from '@/types/types';

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const accessToken = req.cookies.get('accessToken')?.value;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/'
  ) {
    return NextResponse.next();
  }

  if ((pathname === '/login' || pathname === '/signup') && accessToken) {
    try {
      const secret = new TextEncoder().encode(env.JWT_SECRET);
      const { payload } = await jwtVerify(accessToken, secret);
      const role = payload.role as IRole;
      return NextResponse.redirect(
        new URL(getDefaultDashboardRoutes(role), req.url)
      );
    } catch (e) {
      return NextResponse.next();
    }
  }

  const routeOwner = getRouteOwner(pathname);
  if (!accessToken && routeOwner && routeOwner !== 'COMMON') {
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('redirectTo', pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (accessToken) {
    try {
      const secret = new TextEncoder().encode(env.JWT_SECRET);
      const { payload } = await jwtVerify(accessToken, secret);
      const userRole = payload.role as IRole;

      if (routeOwner && routeOwner !== 'COMMON' && routeOwner !== userRole) {
        return NextResponse.redirect(
          new URL(getDefaultDashboardRoutes(userRole), req.url)
        );
      }
    } catch (err) {
      const loginUrl = new URL('/login', req.url);
      const response = NextResponse.redirect(loginUrl);
      response.cookies.delete('accessToken');
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/dashboard/:path*',
    '/teacher/:path*',
    '/login',
    '/signup',
  ],
};
