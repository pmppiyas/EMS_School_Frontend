import { serverFetch } from '../../../lib/serverFetch';

export const getTeacherAttendance = async () => {
  const res = await serverFetch.get('attendance/teacher');
  const data = res.json();
  return data;
};
