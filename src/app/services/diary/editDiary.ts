import { serverFetch } from '@/lib/serverFetch';
import { IDiarySlot } from '@/types/diary.interface';

export const editDiary = async (id: string, payload: Partial<IDiarySlot>) => {
  const res = await serverFetch.patch(`diary/${id}`, payload);
  const result = res.json();
  return result;
};
