import { serverFetch } from '../../../lib/serverFetch';
import { IStudent } from '../../../types/student.interface';

export const updateStudent = async (studentId: string, data: Partial<IStudent>) => {
  const res =  await serverFetch.put(`student/${studentId}`, data);
  const result = await res.json();
  return result;
}
