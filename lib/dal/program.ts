import "server-only";
import z from "zod";
import { CreateProgramFormSchema } from "../zod-definitions";
import { prisma } from "../prisma";
import { verifySession } from "../action/session";
import { unstable_cache } from "next/cache";
import { ProgramsNamesAndIdDTO } from "../dto/programs";

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
  async () => {
    const programs = await prisma.program.findMany();
    return programs;
  },
  ["programs"],
  {
    tags: ["programs"],
  }
);

export const getProgramNamesAndID = unstable_cache(
  async (): Promise<ProgramsNamesAndIdDTO[]> => {
    const programs = await prisma.program.findMany({
      select: {
        name: true,
        id: true,
      },
    });
    return programs;
  },
  ["getProgramNamesAndID"],
  {
    tags: ["programs"],
  }
);
