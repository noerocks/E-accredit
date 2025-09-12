import { verifySession } from "../action/session";
import { prisma } from "../prisma";

export async function createInstrument(name: string) {
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

export async function getInstruments(): Promise<
  { id: string; name: string }[] | null
> {
  const session = await verifySession();
  if (!session) return null;
  const instruments = await prisma.instrument.findMany();
  return instruments;
}
