import { z as zod } from 'zod';

export const createStudentZodSchema = zod.object({
  firstName: zod.string().min(1, 'First name is required'),
  lastName: zod.string().min(1, 'Last name is required'),
  email: zod.string().email('Invalid email address'),
  password: zod.string().min(6, 'Password must be at least 6 characters'),
  phoneNumber: zod.string().optional(),
  address: zod.string().optional(),
  dateOfBirth: zod.string().datetime().optional(),
  class: zod.string().min(1, 'Class is required'),
  roll: zod.string().min(1, 'Roll is required'),
  gender: zod.enum(['MALE', 'FEMALE']),
});
