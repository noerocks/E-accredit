import { z } from "zod";
import { Category } from "./generated/prisma";

export const RegisterFormSchema = z
  .object({
    firstName: z.string().min(1, "This field is required").trim(),
    lastName: z.string().min(1, "This field is required").trim(),
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
    confirm: z.string().min(8, "Minimum 8 characters").trim().optional(),
  })
  .refine((data) => data.password === data.confirm, {
    error: "Passwords don't match",
    path: ["confirm"],
  });

export const LoginFormSchema = z.object({
  email: z.email().min(1, "This field is required").trim(),
  password: z.string().min(1, "This field is required").trim(),
});

export const CreateProgramFormSchema = z.object({
  name: z.string().min(1, "This field is required").trim(),
  code: z.string().min(1, "This field is required").trim(),
  department: z.string().min(1, "This field is required").trim(),
});

export const AcceptUserFormSchema = z.object({
  role: z.string().min(1, "This field is required").trim(),
});

export const AddProgramPersonnelFormSchema = z.object({
  userId: z.string().min(1, "This field is required").trim(),
});

export const CreateInstrumentFormSchema = z.object({
  name: z.string().min(1, "This field is required").trim(),
  accreditingBody: z.string().min(1, "This field is required").trim(),
});

export const CreateAreaFormSchema = z.object({
  label: z
    .string()
    .min(1, "This field is required")
    .regex(/^Area/, 'Label should start with "Area"')
    .regex(/[IVXLCDM]*$/, "Area number should be expressed in roman numerals")
    .regex(/^Area\s[IVXLCDM]/, "Invalid Format")
    .trim(),
  description: z.string().min(1, "This is field is required").trim(),
  weight: z.string().regex(/^\d+(\.\d+)?$/, "Invalid input"),
});

export const CreateParameterFormSchema = z.object({
  label: z
    .string()
    .min(1, "This field is required")
    .regex(/^Parameter/, 'Label should start with "Parameter"')
    .regex(/[A-Z]$/, "Parameter order should be expressed in capital letter")
    .regex(/^Parameter\s[A-Z]/, "Invalid Format")
    .trim(),
  description: z.string().min(1, "This field is required").trim(),
});

export const CreateIndicatorFormSchema = z
  .object({
    label: z.string().min(1, "This field is required").trim(),
    description: z.string().min(1, "This field is required").trim(),
    category: z.enum(Category, "Please choose an existing category"),
    evidence: z.string().min(1, "This field is required").trim(),
  })
  .refine(
    (data) => {
      switch (data.category) {
        case "SYSTEM":
          return /^S\.\d+(\.?\d+)*$/.test(data.label);
        case "IMPLEMENTATION":
          return /^I\.\d+(\.?\d+)*$/.test(data.label);
        case "OUTCOME":
          return /^O\.\d+(\.?\d+)*$/.test(data.label);
      }
    },
    {
      error: "Please follow the naming covention for the chosen category",
      path: ["label"],
    }
  );

export const CreateAccreditationFormSchema = z.object({
  programId: z.string().min(1, "This field is required").trim(),
  levelId: z.string().min(1, "This field is required").trim(),
  instrumentId: z.string().min(1, "This field is required").trim(),
});
