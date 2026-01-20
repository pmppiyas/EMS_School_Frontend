import { serverFetch } from '@/lib/serverFetch';

export const getTeacherMeta = async (id: string) => {
  const res = await serverFetch.get(`meta/teacher/${id}`, {
    next: {
      tags: ['default'],
    },
  });

  const result = res.json();
  return result;
};
