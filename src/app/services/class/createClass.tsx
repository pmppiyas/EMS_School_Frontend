import { serverFetch } from '@/lib/serverFetch';

export const createClass = async ({ name }: { name: string }) => {
  const res = await serverFetch.post('class', { name });

  const result = res.json();

  return result;
};
