'use server';

import { serverFetch } from '@/lib/serverFetch';
import { IClass } from '@/types/class.interface';
import { revalidateTag } from 'next/cache';

export const createClass = async (payload: IClass) => {
  const res = await serverFetch.post('class', payload);

  const result = await res.json();

  if (result.success) {
    revalidateTag('class', 'default');
  }

  return result;
};
