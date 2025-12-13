import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

export const signupSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  phoneNumber: z.string().optional(),
  address: z.string().optional(),
  dateOfBirth: z.string().datetime().optional(),
  class: z.string().min(1, "Class is required"),
  roll: z.string().min(1, "Roll is required"),
  gender: z.enum(["MALE", "FEMALE"]),
  photo: z.any().optional(),
});
