import { serverFetch } from '@/lib/serverFetch';

export const getAllFees = async () => {
  try {
    const res = await serverFetch.get('fee', {
      next: { tags: ['fees'] },
    });

    if (!res.ok) {
      console.error(`Failed to fetch fees: ${res.statusText}`);
      return { fees: [] };
    }

    const result = await res.json();

    if (result?.success) {
      return result.data;
    }

    return { fees: [] };
  } catch (error) {
    console.error('Error in getAllFees:', error);

    return { fees: [] };
  }
};
