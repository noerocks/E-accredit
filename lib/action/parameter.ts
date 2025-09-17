"use server";

import z from "zod";
import { CreateParameterFormSchema } from "../zod-definitions";
import {
  createNewParameter as createNewParameterDAL,
  deleteParameterById,
} from "../dal/parameter";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

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

export async function deleteParameter(
  id: number,
  {
    instrumentId,
    areaId,
    searchParams,
  }: {
    instrumentId: string;
    areaId: number | undefined;
    searchParams: string | undefined;
  }
) {
  if (!id) throw new Error("Instrument ID is required");
  const result = await deleteParameterById(id);
  if (result && "unauthorized" in result && result.unauthorized)
    throw new Error("Unauthorized action");
  revalidateTag("instruments");
  redirect(`/admin/instruments/${instrumentId}/area/${areaId}?${searchParams}`);
}
