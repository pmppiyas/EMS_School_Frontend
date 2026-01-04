/* eslint-disable @typescript-eslint/no-explicit-any */
import { Gender } from '@/types/types';

export interface ITeacher {
  user?: any;
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string | null;
  address?: string | null;
  dateOfBirth?: string | Date | null;
  designation?: string | null;
  gender?: Gender | null;
  userId?: string;
  createdAt?: string;
  updatedAt?: string;
}
