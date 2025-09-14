import z from "zod";
import { CreateParameterFormSchema } from "../zod-definitions";
import { verifySession } from "../action/session";
import { prisma } from "../prisma";

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
