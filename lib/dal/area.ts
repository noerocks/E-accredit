import z, { nullable } from "zod";
import { verifySession } from "../action/session";
import { prisma } from "../prisma";
import { CreateAreaFormSchema } from "../zod-definitions";
import { AreaDTO } from "../dto/instrument";

export async function createNewArea(
  { label, description }: z.infer<typeof CreateAreaFormSchema>,
  instrumentId: string
) {
  const session = await verifySession();
  if (!session) return null;
  if (!["ADMIN", "ACCREDITATION_OFFICER"].includes(session.user.role))
    return { unauthorized: true };
  const area = prisma.area.create({
    data: {
      label,
      description,
      instrumentId,
    },
  });
  return area;
}

export async function getAreaStructureById(
  id: number
): Promise<AreaDTO | null> {
  const area = await prisma.area.findUnique({
    where: {
      id,
    },
    include: {
      parameter: {
        include: {
          indicator: true,
        },
      },
    },
  });
  return area;
}

export async function getAreaById(id: number | undefined) {
  const session = verifySession();
  if (!session) return null;
  const area = await prisma.area.findUnique({
    where: {
      id,
    },
  });
  return area;
}
