'use server';

import { cookies } from 'next/headers';

export async function setCookie(name: string, value: string) {
  const cookieStore = cookies();

  (await cookieStore).set({
    name: name,
    value: value,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  return { success: true };
}

export async function getCookie(name: string) {
  const cookieStore = cookies();
  return (await cookieStore).get(name)?.value || null;
}
