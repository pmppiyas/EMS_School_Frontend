
'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { serverFetch } from '@/lib/serverFetch';

export async function changeEmail(newEmail: string) {
  const cookieStore = await cookies();

  const res = await serverFetch.patch('auth/change-email', { newEmail });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || 'Failed to change email');
  }

  const { accessToken, refreshToken } = result.data;


  cookieStore.set({
    name: 'accessToken',
    value: accessToken,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  cookieStore.set({
    name: 'refreshToken',
    value: refreshToken,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  });

  revalidatePath('/');

  return result;
}
