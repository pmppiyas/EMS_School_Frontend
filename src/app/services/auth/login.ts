/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { cookies } from 'next/headers';
import { env } from '@/config/env';

export async function loginUser(payload: { email: string; password: string }) {
  try {
    const res = await fetch(`${env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message:
          result.message || 'Login failed. Please check your credentials.',
      };
    }

    const { accessToken, refreshToken } = result.data;
    const cookieStore = await cookies();

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

    return {
      success: true,
      message: 'Login successful!',
      data: result.data,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || 'Something went wrong. Please try again later.',
    };
  }
}
