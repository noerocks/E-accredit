import "server-only";
import z from "zod";
import { CreateProgramFormSchema } from "../zod-definitions";
import { prisma } from "../prisma";
import { verifySession } from "../action/session";
import { unstable_cache } from "next/cache";
import { ProgramDTO } from "../dto/programs";

export async function createProgram(
  data: z.infer<typeof CreateProgramFormSchema>
) {
  const session = await verifySession();
  if (!session) return null;
  if (session.user.role !== "ADMIN") return null;
  const newProgram = await prisma.program.create({ data });
  return newProgram;
}

export const getPrograms = unstable_cache(
  async (): Promise<ProgramDTO[]> => {
    const programs = await prisma.program.findMany();
    return programs.map((program) => ({
      id: program.id,
      name: program.name,
      code: program.code,
      department: program.department,
    }));
  },
  ["programs"],
  {
    tags: ["programs"],
  }
);
