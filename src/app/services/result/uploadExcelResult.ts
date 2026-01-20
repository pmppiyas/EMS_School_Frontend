import { serverFetch } from '@/lib/serverFetch';

export const uploadExcelResult = async (payload: any[]) => {
  const res = await serverFetch.post('result/excel_upload', {
    results: payload,
  });
  const result = res.json();
  return result;
};
