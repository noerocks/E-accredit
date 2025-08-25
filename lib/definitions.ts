import { z } from "zod";

export const registerFormSchema = z
  .object({
    firstName: z.string().min(1, "Required"),
    lastName: z.string().min(1, "Required"),
    phoneNumber: z.string().length(11, "Must be 11 digits"),
    email: z.email(),
    password: z
      .string()
      .min(8, "Minimum 8 characters")
      .regex(/[A-Z]/, "At least one uppercase character")
      .regex(/[a-z]/, "At least one lowercase character")
      .regex(/[0-9]/, "At least one digit")
      .regex(/[^A-Z0-9a-z]/, "At least one special character"),
    confirm: z.string().min(8, "Minimum 8 characters"),
  })
  .refine((data) => data.password === data.confirm, {
    error: "Passwords don't match",
    path: ["confirm"],
  });
