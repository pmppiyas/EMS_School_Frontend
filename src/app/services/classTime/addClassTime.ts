import { serverFetch } from '../../../lib/serverFetch';

export async function AddClassTime(payload) {
  await serverFetch.post('class/time', payload);
}
