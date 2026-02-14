'use server';

import { serverFetch } from '@/lib/serverFetch';

export const feesMeta = async () => {
  const res = await serverFetch.get('meta/all-fees', {
    next: {
      revalidate: 0,
    },
  });

  const result = await res.json();
  return result;
};
