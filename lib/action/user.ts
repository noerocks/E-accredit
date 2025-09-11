"use server";

import { revalidateTag } from "next/cache";
import { rejectUser as rejectUserDAL, updateRole } from "../dal/user";
import { PrismaClientKnownRequestError } from "../generated/prisma/runtime/library";
import { Role } from "../generated/prisma";

export async function rejectUser(
  userID: string | undefined,
  currentState: { status: string; message: string } | undefined,
  data: FormData
) {
  console.log(userID);
  if (!userID) return { status: "error", message: "User id is required" };
  try {
    const user = await rejectUserDAL(userID);
    if (user && "unauthorized" in user && user.unauthorized) {
      return {
        status: "error",
        message: "Unauthorized action",
      };
    }
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

export async function acceptUser(id: string | undefined, role: Role) {
  if (!id || !role) return { status: "error", message: "Invalid form data" };
  try {
    const user = await updateRole(id, role);
    revalidateTag("users");
    return {
      status: "success",
      message: "User accepted successfuly",
    };
  } catch (error) {
    const e = error as PrismaClientKnownRequestError;
    if (e.code === "P2025") {
      return {
        status: "error",
        message: "User with the provided ID not found",
      };
    }
    return {
      status: "error",
      message: "Something went wrong",
    };
  }
}
