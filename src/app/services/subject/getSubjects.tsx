import { serverFetch } from '@/lib/serverFetch';

export const getSubjects = async () => {
  const res = await serverFetch.get('subject', {
    next: {
      revalidate: 3600 * 6,
      tags: ['subjects'],
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
