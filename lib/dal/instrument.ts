import { unstable_cache } from "next/cache";
import { verifySession } from "../action/session";
import { prisma } from "../prisma";
import { InstrumentDTO } from "../dto/instrument";

export async function createInstrument(name: string, accreditingBody: string) {
  const session = await verifySession();
  if (!session) return null;
  if (session.user.role !== "ADMIN") return { unauthorized: true };
  const instrument = await prisma.instrument.create({
    data: {
      name,
      accreditingBody,
    },
  });
  return instrument;
}

export const getInstruments = unstable_cache(
  async (): Promise<
    { id: string; name: string; accreditingBody: string }[] | null
  > => {
    const instruments = await prisma.instrument.findMany();
    return instruments;
  },
  ["getInstruments"],
  {
    tags: ["instruments"],
  }
);

export async function getInstrumentStructureById(
  id: string
): Promise<InstrumentDTO | null> {
  const instrument = await prisma.instrument.findUnique({
    where: {
      id,
    },
    include: {
      area: {
        include: {
          parameter: {
            include: {
              indicator: true,
            },
          },
        },
      },
    },
  });
  return instrument;
}
