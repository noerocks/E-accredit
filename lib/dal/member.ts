import { verifySession } from "../action/session";
import { prisma } from "../prisma";

export async function createMember(
  programPersonnelId: string,
  taskForceId: string
) {
  const session = await verifySession();
  if (!session) return null;
  const member = await prisma.taskForceMember.create({
    data: {
      programPersonnel: {
        connect: {
          id: programPersonnelId,
        },
      },
      taskForce: {
        connect: {
          id: taskForceId,
        },
      },
    },
  });
  return member;
}

export async function deleteMember(memberId: string) {
  const session = await verifySession();
  if (!session) return null;
  const member = await prisma.taskForceMember.delete({
    where: {
      id: memberId,
    },
  });
  return member;
}
