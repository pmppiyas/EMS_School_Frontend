import { serverFetch } from '@/lib/serverFetch';

export const getAllFeeTypes = async (classId?: string) => {
  let url = '';

  if (classId) {
    url = `fee/type?classId=${classId}`;
  } else {
    url = 'fee/type';
  }
  const res = await serverFetch.get(url, {
    next: {
      tags: ['feetype'],
      revalidate: 0,
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
