import { serverFetch } from '@/lib/serverFetch';

export const getStudentResults = async (year: string, term: string) => {
  try {
    const res = await serverFetch.get(`result/student/${year}/${term}`, {
      next: {
        revalidate: 60,
      },
    });

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
