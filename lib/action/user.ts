"use server";

import { revalidateTag } from "next/cache";
import { rejectUser as rejectUserDAL } from "../dal/user";
import { PrismaClientKnownRequestError } from "../generated/prisma/runtime/library";

export async function rejectUser(
  userID: string | undefined,
  currentState: { status: string; message: string } | undefined,
  data: FormData
) {
  console.log(userID);
  if (!userID) return { status: "error", message: "User id is required" };
  try {
    const user = await rejectUserDAL(userID);
    if ("unauthorized" in user && user.unauthorized) {
      return {
        status: "error",
        message: "Unauthorized action",
      };
    }
    revalidateTag("pendingUsers");
    revalidateTag("users");
    return {
      status: "success",
      message: "User successfuly rejected",
    };
  } catch (error) {
    const e = error as PrismaClientKnownRequestError;
    if (e.code === "P2025") {
      return {
        status: "error",
        message: "User with the provided ID not found",
      };
    }
  }
}
