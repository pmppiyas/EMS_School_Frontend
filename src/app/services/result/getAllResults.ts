import { serverFetch } from '@/lib/serverFetch';

export const getResults = async (classId: string) => {
  if (!classId) return [];

  try {
    const res = await serverFetch.post(
      `result/${classId}`,
      {},
      {
        next: {
          tags: ['result'],
          revalidate: 0,
        },
      }
    );

    if (!res.ok) {
      console.error(`Fetch failed with status: ${res.status}`);
      return [];
    }

    const data = await res.json();

    return data?.data || [];
  } catch (err) {
    console.error('getResults Error:', err);
    return [];
  }
};
