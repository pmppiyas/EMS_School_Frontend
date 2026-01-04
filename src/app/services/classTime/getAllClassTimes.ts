import { serverFetch } from '../../../lib/serverFetch';
export async function getAllClassTimes() {
  const res = await serverFetch.get('class/time', {
    next: {
      revalidate: 3600 * 6,
      tags: ['students'],
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch class times');
  }
  const result = res.json();

  return result;
}
