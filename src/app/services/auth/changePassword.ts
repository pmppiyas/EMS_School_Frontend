

import { serverFetch } from '@/lib/serverFetch';


interface IChangePassword  {
  oldPassword: string;
  newPassword: string;
};

export const changeMyPassword = async (payload: IChangePassword ) => {
  const res = await serverFetch.patch('auth/change-password', payload);

  const result = res.json();
  return result;
};
