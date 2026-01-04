/* eslint-disable @typescript-eslint/no-explicit-any */
import { env } from '@/config/env';
import { getCookie } from '@/lib/JwtToken';

export const serverFetch = {
  post: async (endpoint: string, body?: any) => {
    const accessToken = getCookie('accessToken');
    if (!accessToken) {
      throw new Error('No access token found');
    }

    const headers: HeadersInit = {
      Authorization: `Bearer ${accessToken}`,
    };

    let finalBody = body;

    if (body && !(body instanceof FormData)) {
      headers['Content-Type'] = 'application/json';
      finalBody = JSON.stringify(body);
    }

    return fetch(`${env.NEXT_PUBLIC_BACKEND_URL}/${endpoint}`, {
      method: 'POST',
      headers,
      body: finalBody,
      cache: 'no-store',
    });
  },
};
