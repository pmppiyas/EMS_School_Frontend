import { serverFetch } from '@/lib/serverFetch';
import {} from 'next/cache';
export const getAllFeeTypes = async () => {
  const res = await serverFetch.get('fee/type', {
    next: {
      tags: ['feetype'],
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
