import { serverFetch } from '../../../lib/serverFetch';
import { ITeacher } from '../../../types/teacher.interface';

export const updateTeacher = async (
  teacherId: string,
  data: Partial<ITeacher>
) => {
  try {
    const response = await serverFetch.put(`teacher/${teacherId}`, data);
    if (!response.ok) {
      throw new Error('Failed to update teacher');
    }
    const result = await response.json();
    return result;
  } catch (err) {
    console.log('Error updating teacher:', err);
  }
};
