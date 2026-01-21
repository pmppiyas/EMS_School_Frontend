import { serverFetch } from '@/lib/serverFetch';

export const getResults = async (
  classId: string,
  term?: string,
  year?: string
) => {
  if (!classId) return [];
  try {
    const queryParams = new URLSearchParams();
    if (term) queryParams.append('term', term);
    if (year) queryParams.append('year', year);

    const res = await serverFetch.get(
      `result/${classId}?${queryParams.toString()}`,
      {
        next: {
          tags: ['result'],
          revalidate: 60,
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
