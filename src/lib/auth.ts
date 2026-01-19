'use server';

import { IRole } from '@/types/types';

type RouteConfig = {
  exact: string[];
  patterns: RegExp[];
};

const authRoutes = ['/login', '/signup', '/forget_password', '/reset_password'];

const commonProtectedRoutes: RouteConfig = {
  exact: ['/my_profile', '/sitting'],
  patterns: [],
};

const teacherProtectedRoutes: RouteConfig = {
  patterns: [/^\/teacher/],
  exact: [],
};

const adminProtectedRoutes: RouteConfig = {
  patterns: [/^\/admin/],
  exact: [],
};

const studentProtectedRoutes: RouteConfig = {
  patterns: [/^\/student/, /^\/dashboard/],
  exact: [],
};

/* ================= HELPERS ================= */

export const isAuthRoutes = (pathname: string) => {
  return authRoutes.includes(pathname);
};

const isRouteMatches = (pathname: string, routes: RouteConfig): boolean => {
  if (routes.exact.includes(pathname)) return true;
  return routes.patterns.some((pattern) => pattern.test(pathname));
};

/* ================= ROLE MATCHER ================= */

export const getRouteOwner = (
  pathname: string
): 'ADMIN' | 'TEACHER' | 'STUDENT' | 'COMMON' | null => {
  if (isRouteMatches(pathname, adminProtectedRoutes)) return 'ADMIN';
  if (isRouteMatches(pathname, teacherProtectedRoutes)) return 'TEACHER';
  if (isRouteMatches(pathname, studentProtectedRoutes)) return 'STUDENT';
  if (isRouteMatches(pathname, commonProtectedRoutes)) return 'COMMON';
  return null;
};

/* ================= DEFAULT DASHBOARD ================= */

export const getDefaultDashboardRoutes = (role: IRole): string => {
  switch (role) {
    case 'ADMIN':
      return '/admin/dashboard';
    case 'TEACHER':
      return '/teacher/dashboard';
    case 'STUDENT':
      return '/dashboard';
    default:
      return '/';
  }
};
