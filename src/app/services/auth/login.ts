// app/actions/login.ts
'use server';

import { cookies } from 'next/headers';
import { env } from '@/config/env';

export async function loginUser(payload: { email: string; password: string }) {
  const res = await fetch(`${env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || 'Login failed');
  }

  const { accessToken, refreshToken } = result.data;

  const cookieStore = cookies();

  (await cookieStore).set({
    name: 'accessToken',
    value: accessToken,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  (await cookieStore).set({
    name: 'refreshToken',
    value: refreshToken,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  });

  return result;
}
