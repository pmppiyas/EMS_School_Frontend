import { IAdmin } from '@/types/admin.interface';
import { IStudent } from '@/types/student.interface';
import { ITeacher } from '@/types/teacher.interface';

export interface IUser {
  id: string;
  role: string;
  email: string;
  status?: string;
}

export type IUserProfile = Partial<IStudent> | ITeacher | IAdmin;
