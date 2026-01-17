import { serverFetch } from '@/lib/serverFetch';
import { IClass } from '@/types/class.interface';

export const createClass = async (payload: IClass) => {
  const res = await serverFetch.post('class', payload);

  const result = res.json();

  return result;
};
