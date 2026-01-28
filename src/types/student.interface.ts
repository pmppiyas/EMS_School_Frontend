import { IClass } from '@/types/class.interface';
import { Gender, IUser } from './types';

export interface IStudent {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  roll: number;
  gender: Gender;
  userId: string;
  photo?: string;
  fatherName?: string;
  motherName?: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  phoneNumber?: string | null;
  address?: string | null;
  dateOfBirth?: string | Date | null;
  classId?: string | null;
  user?: IUser;
  class?: IClass;
}
