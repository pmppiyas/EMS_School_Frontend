/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { serverFetch } from '@/lib/serverFetch';
import { zodValidator } from '@/lib/ZodValidator';
import { ITeacher } from '@/types/teacher.interface';
import { createTeacherZodSchema } from '@/zod/teacher.validation';
import { revalidateTag } from 'next/cache';

export async function createTeacher(formData: FormData) {
  try {
    const payload: ITeacher & { password: string } = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      phoneNumber: formData.get('phoneNumber') as string,
      address: formData.get('address') as string,
      dateOfBirth: formData.get('dateOfBirth')
        ? new Date(formData.get('dateOfBirth') as string).toISOString()
        : undefined,
      designation: formData.get('designation') as string,
      gender: formData.get('gender') as 'MALE' | 'FEMALE',
    };

    const validation = zodValidator(payload, createTeacherZodSchema);
    if (!validation.success) {
      return { success: false, errors: validation.errors };
    }

    const backendFormData = new FormData();
    backendFormData.append('data', JSON.stringify(validation.data));

    const photo = formData.get('photo');
    if (photo instanceof File && photo.size > 0) {
      backendFormData.append('photo', photo);
    }

    const response = await serverFetch.post(
      'user/create_teacher',
      backendFormData
    );

    const result = await response.json();
    if (result.success) {
      revalidateTag('teachers', 'default');
    }

    return result;
  } catch (err: any) {
    console.error('CREATE TEACHER ERROR:', err);
    return { success: false, message: err.message };
  }
}
