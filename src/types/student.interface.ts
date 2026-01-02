// types/student.interface.ts

import { IClass } from './shared.interface';
import { Gender, IUser } from './types';

export interface IStudent {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  roll: number;
  gender: Gender;
  userId: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  phoneNumber?: string | null;
  address?: string | null;
  dateOfBirth?: string | Date | null;
  classId?: string | null;
  user?: IUser;
  class?: IClass;
}
