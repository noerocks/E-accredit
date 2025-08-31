import { cache } from "react";
import { verifySession } from "../action/session";
import { prisma } from "../prisma";
import { DisplayUserDTO } from "../dto/user";

export const getDisplayUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;
  try {
    const user = await prisma.user.findUnique({
      where: { id: session?.userID },
    });
    if (!user) return null;
    return DisplayUserDTO(user);
  } catch (error) {
    console.log("Failed to fetch user");
    return null;
  }
});
