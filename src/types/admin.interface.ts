import { Gender } from '@/types/types';
import { IUser } from '@/types/user.inteface';

export interface IAdmin {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string | null;
  address?: string | null;
  gender?: Gender | null;
  photo?: string | null;
  designation?: string | null;
  userId: string;
  user?: IUser;
  createdAt: string | Date;
  updatedAt: string | Date;
  role: string;
  status?: string;
}
