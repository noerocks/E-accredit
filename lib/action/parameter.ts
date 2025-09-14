"use server";

import z from "zod";
import { CreateParameterFormSchema } from "../zod-definitions";
import { createNewParameter as createNewParameterDAL } from "../dal/parameter";
import { revalidateTag } from "next/cache";

export async function createNewParameter(
  data: z.infer<typeof CreateParameterFormSchema>,
  areaId: number
) {
  const result = CreateParameterFormSchema.safeParse(data);
  if (!result.success && !areaId)
    return { status: "error", message: "Invalid form data" };
  try {
    const area = await createNewParameterDAL(data, areaId);
    if (area && "unauthorized" in area && area.unauthorized)
      return { status: "error", message: "Unauthorized action" };
    revalidateTag("instrumentStructure");
    return {
      status: "success",
      message: "Parameter created successfuly",
    };
  } catch (error) {
    return {
      status: "error",
      message: "Something went wrong",
    };
  }
}
