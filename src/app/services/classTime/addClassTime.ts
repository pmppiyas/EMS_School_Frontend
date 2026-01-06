/* eslint-disable @typescript-eslint/no-explicit-any */

'use server';
import { serverFetch } from '../../../lib/serverFetch';
import { revalidateTag } from 'next/cache';

export async function AddClassTime(payload: any) {
  await serverFetch.post('class/time', payload);
  revalidateTag('classtime', 'default');
}
