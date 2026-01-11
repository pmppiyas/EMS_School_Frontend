import { serverFetch } from '@/lib/serverFetch';

export const makeFee = async (payload: any) => {
  const res = await serverFetch.post('fee', payload);
  const result = res.json();
  return result;
};
