'use server';

import { serverFetch } from '@/lib/serverFetch';
import { ISubject } from '@/types/class.interface';
import { revalidateTag } from 'next/cache';

export const createSubject = async (payload: ISubject[]) => {
  try {
    const res = await serverFetch.post('subject', payload);

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message || 'Failed to create subjects');
    }

    if (result.success) {
      revalidateTag('subject', 'default');
    }

    return result;
  } catch (error: any) {
    throw new Error(error.message || 'Internal Server Error');
  }
};
