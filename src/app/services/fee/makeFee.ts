'use server';

/* eslint-disable @typescript-eslint/no-explicit-any */

import { serverFetch } from '@/lib/serverFetch';
import { revalidateTag } from 'next/cache';

export const makeFee = async (payload: any) => {
  try {
    const res = await serverFetch.post('fee', payload);
    const result = await res.json();

    if (result?.success) {
      revalidateTag('fees', 'default');
    }

    return result;
  } catch (error) {
    console.error('Error in makeFee:', error);
    return { success: false, message: 'Something went wrong' };
  }
};
