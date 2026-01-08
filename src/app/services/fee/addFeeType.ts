/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { serverFetch } from '@/lib/serverFetch';
import { revalidateTag } from 'next/cache';

export const createFeeType = async (payload: any) => {
  const res = await serverFetch.post('fee/type', payload);

  const result = res.json();
  if (result.success) {
    revalidateTag('feetype', 'default');
  }

  return result;
};
