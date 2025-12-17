export type IRole = "ADMIN" | "TEACHER" | "STUDENT";
export type Gender = "MALE" | "FEMALE";

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
