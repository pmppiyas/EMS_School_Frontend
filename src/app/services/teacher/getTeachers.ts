import { serverFetch } from '@/lib/serverFetch';

export const getTeachers = async () => {
  const res = await serverFetch.get('teacher', {
    next: {
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
    throw new Error('Failed to fetch teachers');
  }

  return data.data;
};
