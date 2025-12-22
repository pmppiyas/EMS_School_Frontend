import { serverFetch } from '../../../lib/serverFetch';

export async function deleteTeacher(teacherId: string) {
  try {
    const response = await serverFetch.delete(`teacher/${teacherId}`);
    const result = await response.json();
    return result;
  } catch (err) {
    console.log('Error deleting teacher:', err);
  }
}
