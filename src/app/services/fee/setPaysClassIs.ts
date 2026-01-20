'use server';

import { setCookie } from '@/lib/cookies';
import { revalidatePath } from 'next/cache';

export async function setPaysClassId(classId: string) {
  await setCookie('paysClassId', classId);

  revalidatePath('/', 'layout');
}
