import { serverFetch } from '@/lib/serverFetch';

export const getAllClassTimes = async () => {
  try {
    const res = await serverFetch.get('class/time', {
      cache: 'no-store',
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to fetch classTimes');
    }

    const result = await res.json();
    return result.data;
  } catch (error) {
    console.error('Fetch error details:', error);
    throw error;
  }
};
