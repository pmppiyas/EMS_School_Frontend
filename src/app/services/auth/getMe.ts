import { serverFetch } from '@/lib/serverFetch';

export const getMe = async () => {
  const res = serverFetch.get('user/me', {
    next: {
      revalidate: 0,
    },
  });

  const result = (await res).json();



  return result;
};
