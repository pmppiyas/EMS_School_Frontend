import { serverFetch } from '@/lib/serverFetch';

export const myPaidFees = async (studentId: string, year: string) => {
  const res = await serverFetch.get(`fee/paid-fees/${studentId}?year=${year}`, {
    cache: 'no-store',
  });

  const result = await res.json();
  return result.data;
};
