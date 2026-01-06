'use server';

import { serverFetch } from '../../../lib/serverFetch';
import { cookies } from 'next/headers';

export const logout = async () => {
  const res = await serverFetch.post('auth/logout');
  const result = res.json();
  const cookieStore = await cookies();
  cookieStore.delete('accessToken');
  cookieStore.delete('refreshToken');
  return result;
};
