import { serverFetch } from '../../../lib/serverFetch';

export async function deleteClassTime(classTimeId: string) {
  try {
    const response = await serverFetch.delete(`class/time/${classTimeId}`);
    if (!response.ok) {
      return null;
    }
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
}
