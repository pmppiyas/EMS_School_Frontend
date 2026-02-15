/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { serverFetch } from '@/lib/serverFetch';
import { revalidatePath } from 'next/cache';

export async function createAdmin(formData: FormData) {
  try {

    const payload = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      designation: (formData.get('designation') as string) || undefined,
      phoneNumber: (formData.get('phoneNumber') as string) || undefined,
      address: (formData.get('address') as string) || undefined,
      gender: formData.get('gender') as 'MALE' | 'FEMALE',
    };


    const backendFormData = new FormData();
    backendFormData.append('data', JSON.stringify(payload));

    const photo = formData.get('photo');

    if (photo instanceof File && photo.size > 0) {
      backendFormData.append('photo', photo);
    }

    const response = await serverFetch.post(
      'user/create_admin',
      backendFormData
    );

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || 'Failed to create admin',
        errors: result.errorSources || result.errors,
      };
    }

    revalidatePath('/admin/dashboard/manage');
    return result;
  } catch (err: any) {
    console.error('CREATE ADMIN ERROR:', err);
    return { success: false, message: err.message || 'Error creating admin' };
  }
}
