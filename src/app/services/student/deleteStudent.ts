import { serverFetch } from '../../../lib/serverFetch';

export async function deleteStudent(studentId: string) {
  try {
    const response = await serverFetch.delete(`student/${studentId}`);
    if (!response.ok) {
      return null;
    }
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
}
