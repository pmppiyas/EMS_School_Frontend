import { serverFetch } from '../../../lib/serverFetch';

export const markAttendance = async (payload: any) => {
  const res = await serverFetch.post('attendance', payload);

  const result = res.json();

  return result;
};
