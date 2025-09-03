import z from "zod";
import { CreateProgramFormSchema } from "../zod-definitions";
import { prisma } from "../prisma";
import { verifySession } from "../action/session";

export async function createProgram(
  data: z.infer<typeof CreateProgramFormSchema>
) {
  const session = await verifySession();
  if (!session) return null;
  if (session.user.role !== "ADMIN") return null;
  const newProgram = await prisma.program.create({ data });
  return newProgram;
}
