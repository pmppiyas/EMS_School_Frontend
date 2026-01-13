import { serverFetch } from '@/lib/serverFetch';

export const getClasses = async () => {
  try {
    const res = await serverFetch.get('class');

    if (!res.ok) {
      console.error('Failed to fetch classes:', res.status);
      return {
        success: false,
        classes: [],
      };
    }

    const data = await res.json();
    return data.data ?? [];
  } catch (error) {
    console.error('getAllClasses error:', error);

    return {
      success: false,
      classes: [],
    };
  }
};



