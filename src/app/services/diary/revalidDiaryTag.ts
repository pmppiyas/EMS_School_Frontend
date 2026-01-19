'use server';

import { revalidateTag } from 'next/cache';

export async function handleDiaryRevalidation() {
  revalidateTag('diary', 'default');
}
