import { serverFetch } from '../../../lib/serverFetch';

export const getAllStudents = async () => {
  try {
    const response = await serverFetch.get('student');
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
