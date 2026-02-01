/* eslint-disable @typescript-eslint/no-explicit-any */
import { Gender } from '@/types/types';
import { IUser } from '@/types/user.inteface';

export interface ITeacher {
  user?: IUser;
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string | null;
  address?: string | null;
  photo?: string;
  dateOfBirth?: string | Date | null;
  designation?: string | null;
  gender?: Gender | null;
  userId?: string;
  createdAt?: string;
  updatedAt?: string;
  role?: string;
  status?: string;
  needPasswordChange?: string;
}
