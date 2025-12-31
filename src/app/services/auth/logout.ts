import { serverFetch } from '../../../lib/serverFetch';

export const logout = async () => {
  const res = await serverFetch.post('auth/logout');
  const result = res.json();
  return result;
};
