/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
import {
  getDefaultDashboardRoutes,
  getRouteOwner,
  isAuthRoutes,
} from './lib/auth';
import { IRole } from './types/types';
import { env } from './config/env';

export function proxy(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // 1. Skip public/static/api
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/login' ||
    pathname === '/signup' ||
    pathname === '/'
  ) {
    return NextResponse.next();
  }

  // 2. Determine route type
  const isAuth = isAuthRoutes(pathname);
  const routeOwner = getRouteOwner(pathname);
  if (!routeOwner || routeOwner === 'COMMON') return NextResponse.next();

  // 3. Get token
  const accessToken = req.cookies.get('accessToken')?.value;
  if (!accessToken) {
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('redirectTo', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 4. Decode JWT safely
  let userRole: IRole;
  try {
    const decoded = jwt.verify(accessToken, env.JWT_SECRET) as jwt.JwtPayload;
    userRole = decoded.role as IRole;
  } catch (err: any) {
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set(
      'error',
      err.name === 'TokenExpiredError' ? 'session_expired' : 'invalid_token'
    );
    const response = NextResponse.redirect(loginUrl);
    response.cookies.delete('accessToken');
    response.cookies.delete('refreshToken');
    return response;
  }

  // 5. Redirect logged-in users away from auth pages
 const defaultRoute = getDefaultDashboardRoutes(userRole);
  if (isAuth && pathname !== defaultRoute) {
    return NextResponse.redirect(new URL(defaultRoute, req.url));
  }

  // 6. Role protection
  if (
    (routeOwner === 'ADMIN' && userRole !== 'ADMIN') ||
    (routeOwner === 'TEACHER' && userRole !== 'TEACHER') ||
    (routeOwner === 'STUDENT' && userRole !== 'STUDENT')
  ) {
    return NextResponse.redirect(new URL(defaultRoute, req.url));
  }

  return NextResponse.next();
}

// Only protect the necessary routes
export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*', '/teacher/:path*'],
};
