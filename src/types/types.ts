export type IRole = "ADMIN" | "TEACHER" | "STUDENT";

export interface IUser {
  id: string;
  email: string;
  role: string;
}

export type NavItem = {
  title: string;
  href: string;
  iconName?: string;
};
