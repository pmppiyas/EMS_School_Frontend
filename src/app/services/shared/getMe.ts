import { serverFetch } from '@/lib/serverFetch';

export const getMe = async () => {
  const res = await serverFetch.get('user/me', {
    next: {
      tags: ['user'],
    },
  });

  if (!res.ok) {
    return { student: null };
  }

  const data = await res.json();

  if (data.success) {
    return data.data;
  }

  return { student: null };
};
