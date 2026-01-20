import { NavItem } from '@/types/types';

export const adminRoutes: NavItem[] = [
  { title: 'Overview', href: '/admin/dashboard', iconName: 'LayoutDashboard' },
  {
    title: 'Teachers',
    href: '/admin/dashboard/teachers',
    iconName: 'Users',
  },
  {
    title: 'Students',
    href: '/admin/dashboard/students',
    iconName: 'GraduationCap',
  },
  {
    title: 'Attendance',
    href: '/admin/dashboard/attendance',
    iconName: 'UserCheck',
  },
  {
    title: 'Classes',
    href: '/admin/dashboard/class',
    iconName: 'School',
  },
  {
    title: 'Class Times',
    href: '/admin/dashboard/classtimes',
    iconName: 'Clock',
  },
  {
    title: 'Subjects',
    href: '/admin/dashboard/subject',
    iconName: 'Book',
  },
  {
    title: 'Schedules',
    href: '/admin/dashboard/schedules',
    iconName: 'CalendarDays',
  },
  {
    title: 'Payments',
    href: '/admin/dashboard/payments',
    iconName: 'WalletCards',
  },
  {
    title: 'Fee Type',
    href: '/admin/dashboard/feetype',
    iconName: 'ReceiptText',
  },
  {
    title: 'Results',
    href: '/admin/dashboard/result',
    iconName: 'ReceiptText',
  },
];

export const teacherRoutes: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/teacher/dashboard',
    iconName: 'LayoutDashboard',
  },
  {
    title: 'Diary',
    href: '/teacher/dashboard/diary',
    iconName: 'BookOpenCheck',
  },
  {
    title: 'Attendance',
    href: '/teacher/dashboard/attendance',
    iconName: 'UserCheck',
  },
  {
    title: 'Schedules',
    href: '/teacher/dashboard/schedules',
    iconName: 'CalendarDays',
  },
];

export const studentRoutes: NavItem[] = [
  { title: 'Dashboard', href: '/dashboard', iconName: 'LayoutDashboard' },
  {
    title: 'Diary',
    href: '/dashboard/diary',
    iconName: 'BookOpen',
  },
];

export const commonRoutes: NavItem[] = [
  { title: 'Setting', href: '/setting', iconName: 'Settings' },
  {
    title: 'Helpline',
    href: '/dashboard/helpline',
    iconName: 'PhoneCall',
  },
];

export const getRoutesByRole = (role: string): NavItem[] => {
  switch (role) {
    case 'ADMIN':
      return adminRoutes;
    case 'TEACHER':
      return teacherRoutes;
    case 'STUDENT':
      return studentRoutes;
    default:
      return [];
  }
};
