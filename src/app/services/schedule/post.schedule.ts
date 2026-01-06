import { serverFetch } from '@/lib/serverFetch';

export const postSchedule = async (classId: string, payload: any) => {
  const res = await serverFetch.post(`schedule/${classId}`, payload);

  const result = res.json();
  return result;
};
