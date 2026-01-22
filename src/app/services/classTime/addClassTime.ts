/* eslint-disable @typescript-eslint/no-explicit-any */

'use server';
import { serverFetch } from '../../../lib/serverFetch';
import { revalidateTag } from 'next/cache';

export async function AddClassTime(payload: any) {
  const res = await serverFetch.post('class/time', payload);
  const result = await res.json();

  revalidateTag('classtime', 'default');
  return result;
}
