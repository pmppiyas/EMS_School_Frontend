import { NavItem } from '@/types/types';

export const adminRoutes: NavItem[] = [
  { title: 'Dashboard', href: '/admin/dashboard', iconName: 'IconBook' },
  {
    title: 'Attendance',
    href: '/admin/dashboard/attendance',
    iconName: 'IconClock2',
  },
  {
    title: 'Teachers',
    href: '/admin/dashboard/teachers',
    iconName: 'IconClipboardDataFilled',
  },
  {
    title: 'Students',
    href: '/admin/dashboard/students',
    iconName: 'IconClock2',
  },

  {
    title: 'Schedules',
    href: '/admin/dashboard/schedules',
    iconName: 'IconStethoscope',
  },
  {
    title: 'Class Times',
    href: '/admin/dashboard/classtimes',
    iconName: 'IconSchool',
  },
  {
    title: 'Payments',
    href: '/admin/dashboard/payments',
    iconName: 'IconStethoscope',
  },
];

export const teacherRoutes: NavItem[] = [
  { title: 'Dashboard', href: '/teacher/dashboard', iconName: 'IconBook' },
  {
    title: 'Attendance',
    href: '/teacher/dashboard/attendance',
    iconName: 'IconClock2',
  },
  {
    title: 'Schedules',
    href: '/teacher/dashboard/schedules',
    iconName: 'IconStethoscope',
  },
  {
    title: 'Students',
    href: '/teacher/dashboard/students',
    iconName: 'IconClock2',
  },
];

export const studentRoutes: NavItem[] = [
  { title: 'Dashboard', href: '/dashboard', iconName: 'IconDashboard' },
  {
    title: 'Diery',
    href: '/dashboard/diery',
    iconName: 'IconVocabulary',
  },
];

export const commonRoutes: NavItem[] = [
  { title: 'Setting', href: '/setting', iconName: 'IconSettings2' },
  {
    title: 'Helpline',
    href: '/dashboard/helpline',
    iconName: 'IconPhoneCall',
  },
];

export const getRoutesByRole = (role: string): NavItem[] => {
  switch (role) {
    case 'ADMIN':
      return adminRoutes;
    case 'TEACHER':
      return teacherRoutes;
    case 'PATIENT':
      return studentRoutes;
    default:
      return [];
  }
};
