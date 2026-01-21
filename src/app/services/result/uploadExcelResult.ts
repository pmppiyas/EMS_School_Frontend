/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { serverFetch } from '@/lib/serverFetch';
import { revalidateTag } from 'next/cache';

export const uploadExcelResult = async (payload: {
  results: any[];
  term: string;
  year: number;
}) => {
  try {
    const res = await serverFetch.post('result/excel_upload', {
      results: payload,
    });
    console.log('Upload Response:', res);
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'ডাটা আপলোড করতে ব্যর্থ হয়েছে।');
    }

    const result = await res.json();

    revalidateTag('result', 'default');

    return result;
  } catch (error: any) {
    console.error('Upload Error:', error);
    throw new Error(error.message || 'সার্ভারে কানেক্ট করতে সমস্যা হচ্ছে।');
  }
};
