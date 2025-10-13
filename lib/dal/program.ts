import "server-only";
import z from "zod";
import { CreateProgramFormSchema } from "../zod-definitions";
import { prisma } from "../prisma";
import { verifySession } from "../action/session";
import { unstable_cache } from "next/cache";
import { ProgramDTO } from "../dto/programs";
import { Program } from "../generated/prisma";

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
    const programs = await prisma.program.findMany({
      include: {
        accreditation: {
          include: {
            level: true,
          },
        },
        programHead: true,
      },
    });
    return programs.map((program) => ({
      id: program.id,
      name: program.name,
      code: program.code,
      major: program.major,
      programHead: program.programHead,
      department: program.department,
      accreditation: program.accreditation,
    }));
  },
  ["programs"],
  {
    tags: ["programs"],
  }
);

export async function getProgramById(id: string) {
  const session = await verifySession();
  if (!session) return null;
  const program = await prisma.program.findMany({
    where: {
      id,
    },
    include: {
      programHead: true,
    },
  });
  return program[0];
}

export async function getProgramCurrentAccreditation(id: string) {
  const session = await verifySession();
  if (!session) return null;
  const program = await prisma.program.findUnique({
    where: {
      id,
    },
    include: {
      accreditation: {
        include: {
          level: true,
        },
      },
    },
  });
  return program;
}

export async function assignProgramHead(userId: string, programId: string) {
  const session = await verifySession();
  if (!session) return null;
  const program = prisma.program.update({
    where: {
      id: programId,
    },
    data: {
      programHead: {
        connect: {
          id: userId,
        },
      },
    },
  });
  return program;
}

export async function getProgramheadById(id: string) {
  const session = await verifySession();
  if (!session) return null;
  const programHead = prisma.program.findUnique({
    where: {
      id,
    },
    select: {
      programHead: {
        include: {
          programPersonnel: {
            include: {
              user: true,
            },
          },
        },
      },
    },
  });
  return programHead;
}
