import { verifySession } from "../action/session";
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
