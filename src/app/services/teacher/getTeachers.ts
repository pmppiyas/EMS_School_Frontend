import { serverFetch } from '@/lib/serverFetch';

export const getTeachers = async () => {
  const res = await serverFetch.get('teacher', {
    next: {
      tags: ['teacher'],
      revalidate: 0,
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('Server Error:', errorText);
    return { teachers: [] };
  }

  try {
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.error('JSON parse error:', err);
    return { teachers: [] };
  }
};
