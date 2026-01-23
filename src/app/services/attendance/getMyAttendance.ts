import { serverFetch } from '@/lib/serverFetch';

export const getMyAttendance = async (month: string, year: string) => {
  const res = await serverFetch.get(`attendance/my/${month}/${year}`, {
    next: {
      tags: ['attendance'],
      revalidate: 60,
    },
  });

  let data;

  try {
    data = await res.json();
  } catch (err) {
    console.error('JSON parse error:', err);
    return null;
  }

  if (!res.ok) {
    throw new Error('Failed to fetch own attendances');
  }

  return data.data;
};
