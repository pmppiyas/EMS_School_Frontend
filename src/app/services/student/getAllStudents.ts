import { serverFetch } from '../../../lib/serverFetch';

export const getAllStudents = async (classId: string) => {
  try {
    const query = classId && classId.trim() !== '' ? `?classId=${classId}` : '';
    const response = await serverFetch.get(`student${query}`);

    const result = await response.json();
    if (result.success) {
      return result.data;
    } else {
      return { students: [] };
    }
  } catch (error) {
    console.error('Error fetching students:', error);
    return { students: [] };
  }
};
