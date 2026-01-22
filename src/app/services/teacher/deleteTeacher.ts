'use server';

import { revalidateTag } from 'next/cache';
import { serverFetch } from '../../../lib/serverFetch';

export async function deleteTeacher(teacherId: string) {
  try {
    const response = await serverFetch.delete(`teacher/${teacherId}`, {});
    const result = await response.json();
    revalidateTag('teacher', 'default');
    return result;
  } catch (err) {
    console.log('Error deleting teacher:', err);
  }
}
