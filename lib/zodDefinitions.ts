import { z } from "zod";

export const RegisterFormSchema = z
  .object({
    firstName: z.string().min(1, "Required").trim(),
    lastName: z.string().min(1, "Required").trim(),
    phoneNumber: z
      .string()
      .length(11, "Must be 11 digits")
      .regex(/09\d{9}/, "Invalid phone number"),
    email: z.email().trim(),
    password: z
      .string()
      .min(8, "Minimum 8 characters")
      .regex(/[A-Z]/, "At least one uppercase character")
      .regex(/[a-z]/, "At least one lowercase character")
      .regex(/[0-9]/, "At least one digit")
      .regex(/[^A-Z0-9a-z]/, "At least one special character")
      .trim(),
    confirm: z.string().min(8, "Minimum 8 characters").trim(),
  })
  .refine((data) => data.password === data.confirm, {
    error: "Passwords don't match",
    path: ["confirm"],
  });
