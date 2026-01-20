import { serverFetch } from '@/lib/serverFetch';

export const getResults = async (classId: string) => {
  const res = await serverFetch.get(`result/${classId}`, {
    next: {
      tags: ['result'],
    },
  });

  try {
    data = await res.json();
  } catch (err) {
    console.error('JSON parse error:', err);
    return null;
  }

  if (!res.ok) {
    throw new Error('Failed to fetch results');
  }
  console.log(data);

  return data.data;
};
