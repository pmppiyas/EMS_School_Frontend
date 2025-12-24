import { serverFetch } from '../../../lib/serverFetch';

export const getStudentById = async (studentId: string) => {
  const res = await serverFetch.get(`student/${studentId}`);
  const result = await res.json();
  return result;
};
