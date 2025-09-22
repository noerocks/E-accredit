import { prisma } from "../prisma";
import { verifySession } from "./session";

export async function createInstrumentFolder(
  phaseOneRequirementsId: string,
  folderId: string
) {
  const session = verifySession();
  if (!session) return null;
  const instrumentFolder = prisma.instrumentFolder.create({
    data: {
      phaseOneRequirements: {
        connect: {
          id: phaseOneRequirementsId,
        },
      },
      folderId,
    },
  });
  return instrumentFolder;
}
