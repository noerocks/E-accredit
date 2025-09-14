import z from "zod";
import { verifySession } from "../action/session";
import { prisma } from "../prisma";
import { CreateAreaFormSchema } from "../zod-definitions";

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
