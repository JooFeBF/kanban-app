import { z } from "zod";
import toast from 'react-hot-toast'

export const userScheme = z.object({
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