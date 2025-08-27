"use server";

import { z } from "zod";
import { registerFormSchema } from "./definitions";

export const register = async (
  formData: z.infer<typeof registerFormSchema>
) => {
  return { status: "success", message: "Register successful" };
};
