import { prisma } from "../prisma";
import { verifySession } from "../action/session";

export async function createInstrumentFolder(phaseOneRequirementsId: string) {
  const session = verifySession();
  if (!session) return null;
  const instrumentFolder = prisma.instrumentFolder.create({
    data: {
      phaseOneRequirements: {
        connect: {
          id: phaseOneRequirementsId,
        },
      },
    },
  });
  return instrumentFolder;
}
