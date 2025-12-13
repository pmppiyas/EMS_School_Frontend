import { NavItem } from "@/types/types";

export const adminRoutes: NavItem[] = [
  { title: "Dashboard", href: "/admin/dashboard", iconName: "IconBook" },

  {
    title: "Teachers",
    href: "/admin/dashboard/teachers",
    iconName: "IconClipboardDataFilled",
  },
  {
    title: "Students",
    href: "/admin/dashboard/student",
    iconName: "IconClock2",
  },
  {
    title: "Schedules",
    href: "/admin/dashboard/specialities_management",
    iconName: "IconSchool",
  },
  {
    title: "Payments",
    href: "/admin/dashboard/payment",
    iconName: "IconStethoscope",
  },
];

export const teacherRoutes: NavItem[] = [
  { title: "Dashboard", href: "/dashboard", iconName: "dashboard" },
];

export const studentRoutes: NavItem[] = [
  { title: "Dashboard", href: "/dashboard", iconName: "IconDashboard" },
  {
    title: "Diery",
    href: "/dashboard/diery",
    iconName: "IconVocabulary",
  },
];

export const commonRoutes: NavItem[] = [
  { title: "Setting", href: "/setting", iconName: "IconSettings2" },
  {
    title: "Helpline",
    href: "/dashboard/helpline",
    iconName: "IconPhoneCall",
  },
];

export const getRoutesByRole = (role: string): NavItem[] => {
  switch (role) {
    case "ADMIN":
      return adminRoutes;
    case "TEACHER":
      return teacherRoutes;
    case "PATIENT":
      return studentRoutes;
    default:
      return [];
  }
};
