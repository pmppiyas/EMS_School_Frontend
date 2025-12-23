import { env } from '@/config/env';
import { getCookie } from '@/lib/JwtToken';

const serverFetchHelper = async (
  endpoint: string,
  options: RequestInit
): Promise<Response> => {
  const { headers, ...restOptions } = options;

  const accessToken = await getCookie('accessToken');

  const defaultHeaders: HeadersInit = {
    ...(headers || {}),
    Authorization: accessToken ? `Bearer ${accessToken}` : '',
  };
  if (!(restOptions.body instanceof FormData)) {
    (defaultHeaders as Record<string, string>)['Content-Type'] =
      'application/json';
  }

  return fetch(`${env.NEXT_PUBLIC_BACKEND_URL}/${endpoint}`, {
    headers: defaultHeaders,
    ...restOptions,
  });
};

export const serverFetch = {
  get: async (endpoint: string, options: RequestInit = {}) => {
    return serverFetchHelper(endpoint, {
      ...options,
      method: 'GET',
    });
  },

  post: async (endpoint: string, body?: any, options: RequestInit = {}) => {
    const finalBody = body instanceof FormData ? body : JSON.stringify(body);

    return serverFetchHelper(endpoint, {
      ...options,
      method: 'POST',
      body: finalBody,
    });
  },

  patch: async (endpoint: string, body?: any, options: RequestInit = {}) => {
    const finalBody = body instanceof FormData ? body : JSON.stringify(body);

    return serverFetchHelper(endpoint, {
      ...options,
      method: 'PATCH',
      body: finalBody,
    });
  },

  put: async (endpoint: string, body?: any, options: RequestInit = {}) => {
    const finalBody = body instanceof FormData ? body : JSON.stringify(body);

    return serverFetchHelper(endpoint, {
      ...options,
      method: 'PUT',
      body: finalBody,
    });
  },

  delete: async (endpoint: string, options: RequestInit = {}) => {
    return serverFetchHelper(endpoint, {
      ...options,
      method: 'DELETE',
    });
  },
};
