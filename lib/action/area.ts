"use server";

import z from "zod";
import { CreateAreaFormSchema } from "../zod-definitions";
import { createNewArea as createNewAreaDAL } from "../dal/area";
import { revalidateTag } from "next/cache";

export async function createNewArea(
  data: z.infer<typeof CreateAreaFormSchema>,
  instrumentId: string
) {
  const result = CreateAreaFormSchema.safeParse(data);
  if (!result.success && !instrumentId)
    return { status: "error", message: "Invalid form data" };
  try {
    const area = await createNewAreaDAL(data, instrumentId);
    if (area && "unauthorized" in area && area.unauthorized)
      return { status: "error", message: "Unauthorized action" };
    revalidateTag("instrumentStructure");
    return {
      status: "success",
      message: "Area created successfuly",
    };
  } catch (error) {
    return {
      status: "error",
      message: "Something went wrong",
    };
  }
}
