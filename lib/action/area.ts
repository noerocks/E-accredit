"use server";

import z from "zod";
import { CreateAreaFormSchema } from "../zod-definitions";
import { createNewArea as createNewAreaDAL, deleteAreaById } from "../dal/area";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

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

export async function deleteArea(
  id: number,
  {
    instrumentId,
    searchParams,
  }: { instrumentId: string | undefined; searchParams: string }
) {
  if (!id) throw new Error("Instrument ID is required");
  const result = await deleteAreaById(id);
  if (result && "unauthorized" in result && result.unauthorized)
    throw new Error("Unauthorized action");
  revalidateTag("instruments");
  redirect(`/admin/instruments/${instrumentId}?${searchParams}`);
}
