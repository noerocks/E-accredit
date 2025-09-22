import { verifySession } from "../action/session";
import { prisma } from "../prisma";

export async function CreateAccreditation(programId: string) {
  const session = await verifySession();
  if (!session) return null;
  const accreditation = await prisma.accreditation.create({
    data: {
      programId,
    },
  });
  return accreditation;
}
