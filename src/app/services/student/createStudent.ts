'use server';

import { serverFetch } from '@/lib/serverFetch';
import { zodValidator } from '@/lib/ZodValidator';
import { createStudentZodSchema } from '../../../zod/student.validation';

export async function createStudent(formData: FormData) {
  try {
    const payload = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      roll: formData.get('roll') as string,
      phoneNumber: (formData.get('phoneNumber') as string) || undefined,
      address: (formData.get('address') as string) || undefined,
      gender: formData.get('gender') as 'MALE' | 'FEMALE',
      classId: (formData.get('classId') as string) || undefined,
      dateOfBirth: formData.get('dateOfBirth')
        ? new Date(formData.get('dateOfBirth') as string).toISOString()
        : undefined,
    };

    const validation = zodValidator(payload, createStudentZodSchema);
    console.log('Validation=>', validation);
    if (!validation.success) {
      return { success: false, errors: validation.errors };
    }

    const backendFormData = new FormData();

    backendFormData.append('data', JSON.stringify(payload));
    const photo = formData.get('photo');
    if (photo instanceof File && photo.size > 0) {
      backendFormData.append('photo', photo);
    }

    const response = await serverFetch.post(
      'user/create_student',
      backendFormData
    );

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || 'Failed to create student',
        errors: result.errorSources || result.errors,
      };
    }

    return result;
  } catch (err: any) {
    console.error('CREATE STUDENT ERROR:', err);
    return { success: false, message: err.message || 'Error creating student' };
  }
}
