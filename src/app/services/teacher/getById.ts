import { serverFetch } from '../../../lib/serverFetch';

export async function getTeacherById(teacherId: string) {
  try {
    const response = await serverFetch.get(`teacher/${teacherId}`);
    const result = await response.json();
    if (!response.ok) {
      throw new Error('Failed to fetch teacher');
    }
    return result;
  } catch (error) {
    console.log('Error fetching teacher by ID:', error);
  }
}
