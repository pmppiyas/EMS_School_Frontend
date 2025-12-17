import { Gender } from "@/types/types";

export interface ITeacher {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string | null;
  address?: string | null;
  dateOfBirth?: string | null;
  designation?: string | null;
  gender?: Gender | null;
  userId?: string;
  createdAt?: string;
  updatedAt?: string;
}
