import { z } from "zod";

export const userScheme = z.object({
    name: z.string()
    .min(3, 'Username must be at least 3 characters'),
    email: z.string()
    .email({
        message: 'Please enter a valid email'
    }),
    password: z.string()
    .min(8, {
        message: 'Password must be at least 8 characters'
    })
    .max(20, {
        message: 'Password must be less than 20 characters'
    }),
});

export const loginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters",
    })
    .max(20, {
      message: "Password must be less than 20 characters",
    }),
});