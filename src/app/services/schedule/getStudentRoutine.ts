import { serverFetch } from '@/lib/serverFetch';

export const getStudentRoutine = async (day: string) => {
  const res = await serverFetch.get(`schedule/student/${day.toUpperCase()}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch student routine: ${res.statusText}`);
  }

  let result;
  try {
    result = await res.json();
  } catch (err) {
    console.error('JSON parse error in getStudentRoutine:', err);
    return null;
  }

  return result.data;
};
