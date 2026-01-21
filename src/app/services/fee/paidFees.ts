import { serverFetch } from '@/lib/serverFetch';

export const myPaidFees = async (studentId: string, year: string) => {
  const res = await serverFetch.get(`fee/paid-fees/${studentId}?year=${year}`);

  const result = await res.json();
  return result.data;
};
