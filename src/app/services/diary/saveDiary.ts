import { serverFetch } from '@/lib/serverFetch';
import { IDiarySlot } from '@/types/diary.interface';

export const saveDiary = async (payload: Partial<IDiarySlot>) => {
  const res = await serverFetch.post('diary', payload);
  const result = res.json();
  return result;
};
