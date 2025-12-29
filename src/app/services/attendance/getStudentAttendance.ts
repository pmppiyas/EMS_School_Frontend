import { serverFetch } from '../../../lib/serverFetch';

export const getTeacherAttendance = async () => {
  const res = await serverFetch.get('attendance/student');
  const data = res.json();
  return data;
};
