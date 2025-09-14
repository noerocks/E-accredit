"use server";

import z from "zod";
import { CreateIndicatorFormSchema } from "../zod-definitions";
import { createNewIndicator as createNewIndicatorDAL } from "../dal/indicator";
import { revalidateTag } from "next/cache";

export async function createNewIndicator(
  data: z.infer<typeof CreateIndicatorFormSchema>,
  parameterId: number
) {
  const result = CreateIndicatorFormSchema.safeParse(data);
  if (!result.success && !parameterId)
    return { status: "error", message: "Invalid form data" };
  try {
    const area = await createNewIndicatorDAL(data, parameterId);
    if (area && "unauthorized" in area && area.unauthorized)
      return { status: "error", message: "Unauthorized action" };
    revalidateTag("instrumentStructure");
    return {
      status: "success",
      message: "Indicator created successfuly",
    };
  } catch (error) {
    return {
      status: "error",
      message: "Something went wrong",
    };
  }
}
