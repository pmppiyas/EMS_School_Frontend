'use server';

import { serverFetch } from '../../../lib/serverFetch';
import { revalidateTag } from 'next/cache';

export async function deleteStudent(studentId: string) {
  try {
    const response = await serverFetch.delete(`student/${studentId}`);
    if (!response.ok) {
      return null;
    }
    const result = await response.json();
    revalidateTag('students', 'default');
    return result;
  } catch (error) {
    return null;
  }
}
