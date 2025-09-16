import z from "zod";
import { CreateParameterFormSchema } from "../zod-definitions";
import { verifySession } from "../action/session";
import { prisma } from "../prisma";
import { ParameterDTO } from "../dto/instrument";

export async function createNewParameter(
  { label, description }: z.infer<typeof CreateParameterFormSchema>,
  areaId: number
) {
  const session = await verifySession();
  if (!session) return null;
  if (!["ADMIN", "ACCREDITATION_OFFICER"].includes(session.user.role))
    return { unauthorized: true };
  const parameter = prisma.parameter.create({
    data: {
      label,
      description,
      areaId,
    },
  });
  return parameter;
}

export async function getParameterStructureById(
  id: number
): Promise<ParameterDTO | null> {
  const parameter = await prisma.parameter.findUnique({
    where: {
      id,
    },
    include: {
      indicator: true,
    },
  });
  return parameter;
}
