import { z as zod } from "zod";

export const createTeacherZodSchema = zod.object({
  firstName: zod.string().min(1, "First name is required"),
  lastName: zod.string().min(1, "Last name is required"),
  email: zod.string().email("Valid email is required"),
  password: zod.string().min(6, "Password must be at least 6 characters"),
  phoneNumber: zod.string().optional(),
  address: zod.string().optional(),
  dateOfBirth: zod.string().datetime().optional(),
  designation: zod.string().optional(),
  gender: zod.enum(["MALE", "FEMALE"]),
});
