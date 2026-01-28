export type NavItem = {
  title: string;
  href: string;
  iconName?: string;
};

export type RouteSection = {
  title: string;
  nav: NavItem[];
};

export const adminRoutes: RouteSection[] = [
  {
    title: 'Main Menu',
    nav: [
      {
        title: 'Overview',
        href: '/admin/dashboard',
        iconName: 'LayoutDashboard',
      },
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
        title: 'Schedules',
        href: '/admin/dashboard/schedules',
        iconName: 'CalendarDays',
      },
      {
        title: 'Results',
        href: '/admin/dashboard/result',
        iconName: 'BookOpenCheck',
      },
    ],
  },
  {
    title: 'Academic Management',
    nav: [
      { title: 'Classes', href: '/admin/dashboard/class', iconName: 'School' },
      {
        title: 'Class Times',
        href: '/admin/dashboard/classtimes',
        iconName: 'Clock',
      },
      { title: 'Subjects', href: '/admin/dashboard/subject', iconName: 'Book' },
    ],
  },
  {
    title: 'Finance',
    nav: [
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
    ],
  },
  {
    title: 'Generate Documents',
    nav: [
      {
        title: 'Admit Card',
        href: '/admin/dashboard/generate?tabs=admit',
        iconName: 'FileText',
      },
      {
        title: 'Testimonial',
        href: '/admin/dashboard/generate?tabs=testimonial',
        iconName: 'Award',
      },
    ],
  },
];

export const teacherRoutes: RouteSection[] = [
  {
    title: 'Teacher Dashboard',
    nav: [
      {
        title: 'Overview',
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
    ],
  },
];

export const studentRoutes: RouteSection[] = [
  {
    title: 'Student Portal',
    nav: [
      { title: 'Overview', href: '/dashboard', iconName: 'LayoutDashboard' },
      { title: 'Diary', href: '/dashboard/diary', iconName: 'BookOpen' },
      { title: 'Routine', href: '/dashboard/routine', iconName: 'Calendar' },
      { title: 'Result', href: '/dashboard/result', iconName: 'Award' },
      {
        title: 'Attendance',
        href: '/dashboard/attendance',
        iconName: 'UserCheck',
      },
    ],
  },
];

export const commonRoutes: RouteSection[] = [
  {
    title: 'Support & Settings',
    nav: [
      { title: 'Setting', href: '/setting', iconName: 'Settings' },
      { title: 'Helpline', href: '/dashboard/helpline', iconName: 'PhoneCall' },
    ],
  },
];

export const getRoutesByRole = (role: string): RouteSection[] => {
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
