import { unstable_cache } from "next/cache";
import { verifySession } from "../action/session";
import { ProgramPersonnelDTO } from "../dto/program-personnel";
import { prisma } from "../prisma";

export async function createProgramPersonnel(
  programId: string,
  userId: string
) {
  const session = await verifySession();
  if (!session) return null;
  if (session.user.role !== "ADMIN") return { unauthorized: true };
  const programPersonnel = await prisma.programPersonnel.create({
    data: {
      user: {
        connect: { id: userId },
      },
      program: {
        connect: { id: programId },
      },
    },
  });
  return programPersonnel;
}

export const getProgramPersonnelByProgramId = unstable_cache(
  async (programId: string): Promise<ProgramPersonnelDTO[] | null> => {
    const programPersonnel = await prisma.programPersonnel.findMany({
      where: {
        programId,
      },
      include: {
        user: true,
      },
    });
    return programPersonnel.map((personnel) => ({
      id: personnel.id,
      assignedAt: personnel.assignedAt,
      user: {
        firstName: personnel.user.firstName,
        lastName: personnel.user.lastName,
      },
    }));
  },
  ["programPersonnelByProgramId"],
  {
    tags: ["programPersonnel"],
  }
);
