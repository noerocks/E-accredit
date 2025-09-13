"use server";

import z from "zod";
import { CreateInstrumentFormSchema } from "../zod-definitions";
import { createInstrument as createInstrumentDAL } from "../dal/instrument";
import { PrismaClientKnownRequestError } from "../generated/prisma/runtime/library";
import { revalidateTag } from "next/cache";

export async function createInstrument(
  data: z.infer<typeof CreateInstrumentFormSchema>
) {
  const result = CreateInstrumentFormSchema.safeParse(data);
  if (!result.success) return { status: "error", message: "Invalid form data" };
  const {
    data: { name, accreditingBody },
  } = result;
  try {
    await createInstrumentDAL(name, accreditingBody);
    revalidateTag("instruments");
    return {
      status: "success",
      message: "Instrument created successfuly",
    };
  } catch (error) {
    const e = error as PrismaClientKnownRequestError;
    if (e.code === "P2002") {
      return {
        status: "error",
        message: "Instrument name already exists",
      };
    }
    return {
      status: "error",
      message: "Something went wrong",
    };
  }
}
