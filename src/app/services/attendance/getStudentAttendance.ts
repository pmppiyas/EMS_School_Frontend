import { serverFetch } from '@/lib/serverFetch';

export const getStudentAttendance = async (classId?: string) => {
  const url = classId
    ? `attendance/student?classId=${classId}`
    : `attendance/student`;

  const res = await serverFetch.get(url, {
    next: {
      revalidate: 30,
    },
  });

  let data;
  try {
    data = await res.json();
  } catch (err) {
    console.error('JSON parse error:', err);
    return {
      success: false,
      student: [],
    };
  }

  if (!res.ok) {
    return {
      success: false,
      student: [],
    };
  }

  return data.data;
};
