'use server';

import { serverFetch } from '../../../lib/serverFetch';
import { revalidateTag } from 'next/cache';
export async function deleteClassTime(classTimeId: string) {
  try {
    const response = await serverFetch.delete(`class/time/${classTimeId}`);
    if (!response.ok) {
      return null;
    }
    const result = await response.json();
    revalidateTag('classtime', 'default');
    return result;
  } catch (error) {
    return null;
  }
}
