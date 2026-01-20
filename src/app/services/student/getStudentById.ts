import { serverFetch } from '../../../lib/serverFetch';

export const getStudentById = async (studentId: string) => {
  const res = await serverFetch.get(`student/${studentId}`, {
    next: {
      revalidate: 30,
    },
  });
  const result = await res.json();
  return result;
};
