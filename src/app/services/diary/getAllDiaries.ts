import { serverFetch } from '@/lib/serverFetch';

export const getDiaries = async (classId: string, date?: string) => {
  if (!classId) return { data: [] };

  const query = date ? `?date=${date}` : '';

  const res = await serverFetch.get(`diary/${classId}${query}`, {
    cache: 'no-store',
  });

  if (!res.ok) return { data: [] };

  let data;
  try {
    data = await res.json();
  } catch (err) {
    console.error('JSON parse error:', err);
    return null;
  }

  if (!res.ok) {
    throw new Error('Failed to fetch diaries');
  }

  return data.data;
};
