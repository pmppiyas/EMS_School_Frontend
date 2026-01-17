import { serverFetch } from '@/lib/serverFetch';
import { ISubject } from '@/types/class.interface';

export const createSubject = async (payload: ISubject[]) => {
  const res = await serverFetch.post('subject', payload);

  const result = res.json();

  return result;
};
