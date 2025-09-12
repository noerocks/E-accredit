import { verifySession } from "../action/session";
import { prisma } from "../prisma";

export async function CreateInstrument(name: string) {
  const session = await verifySession();
  if (!session) return null;
  if (session.user.role !== "ADMIN") return { unauthorized: true };
  const instrument = await prisma.instrument.create({
    data: {
      name,
    },
  });
  return instrument;
}
