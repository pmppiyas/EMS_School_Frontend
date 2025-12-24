import { serverFetch } from '../../../lib/serverFetch';

export async function getAllClasses() {
  try {
    const res = await serverFetch.get('class');
    const result = await res.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching classes:', error);
    return { classes: [] };
  }
}
