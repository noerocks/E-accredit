import { z } from "zod";
import { CreateIndicatorFormSchema } from "../zod-definitions";
import { verifySession } from "../action/session";
import { prisma } from "../prisma";
import { IndicatorDTO } from "../dto/instrument";

export async function createNewIndicator(
  {
    label,
    description,
    category,
    evidence,
  }: z.infer<typeof CreateIndicatorFormSchema>,
  parameterId: number
) {
  const session = await verifySession();
  if (!session) return null;
  if (!["ADMIN", "ACCREDITATION_OFFICER"].includes(session.user.role))
    return { unauthorized: true };
  const indicator = prisma.indicator.create({
    data: {
      label,
      description,
      category,
      evidence,
      parameterId,
    },
  });
  return indicator;
}

export async function getIndicatorById(
  id: number | undefined
): Promise<IndicatorDTO | null> {
  const session = verifySession();
  if (!session) return null;
  const indicator = await prisma.indicator.findUnique({
    where: {
      id,
    },
  });
  return indicator;
}
