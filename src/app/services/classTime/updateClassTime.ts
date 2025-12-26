import { serverFetch } from '../../../lib/serverFetch';

export const updateClassTime = async (id: string, payload: any) => {
  const res = await serverFetch.patch(`class/time/${id}`, payload);
  const result = res.json();
  console.log(res)
  return result;
};
