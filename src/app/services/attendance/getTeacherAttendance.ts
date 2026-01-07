import { serverFetch } from '@/lib/serverFetch';

export const getTeacherAttendance = async () => {
  const res = await serverFetch.get('attendance/teacher');

  let data;
  try {
    data = await res.json();
  } catch (err) {
    console.error('JSON parse error:', err);
    return null;
  }

  if (!res.ok) {
    throw new Error('Failed to fetch teachers attendances');
  }

  return data.data;
};
