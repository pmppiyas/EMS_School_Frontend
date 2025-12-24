'use server';

import { serverFetch } from '@/lib/serverFetch';
import { zodValidator } from '@/lib/ZodValidator';
import { createStudentZodSchema } from '../../../zod/student.validation';
// import { createStudentZodSchema } from '@/zod/student.validation'; // Ensure this exists

export async function createStudent(formData: FormData) {
  try {
    // 1. Extract plain fields from FormData into a payload object
    const payload = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      roll: formData.get('roll') as string,
      phoneNumber: formData.get('phoneNumber') as string,
      address: formData.get('address') as string,
      gender: formData.get('gender') as 'MALE' | 'FEMALE' | 'OTHER',
      dateOfBirth: formData.get('dateOfBirth')
        ? new Date(formData.get('dateOfBirth') as string).toISOString()
        : undefined,
    };

    const validation = zodValidator(payload, createStudentZodSchema);
    if (!validation.success) {
      return { success: false, errors: validation.errors };
    } 

    // 3. Prepare the final FormData for the backend
    const backendFormData = new FormData();

    // Most backends using multer/file-upload expect a "data" string and a "file"
    backendFormData.append('data', JSON.stringify(payload));

    const photo = formData.get('photo');
    if (photo instanceof File && photo.size > 0) {
      backendFormData.append('file', photo); // Use 'file' or 'photo' depending on your backend field name
    }

    // 4. Send to Backend
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
