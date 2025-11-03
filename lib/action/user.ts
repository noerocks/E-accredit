"use server";

import { revalidateTag } from "next/cache";
import {
  directCreateUser,
  rejectUser as rejectUserDAL,
  updateRole,
  updateUser,
} from "../dal/user";
import { PrismaClientKnownRequestError } from "../generated/prisma/runtime/library";
import { Role } from "../generated/prisma";
import z from "zod";
import { CreateNewUserFormSchema } from "../zod-definitions";
import crypto from "crypto";
import bcrypt from "bcrypt";
import { deleteUser as deleteUserDAL } from "../dal/user";

export async function rejectUser(
  userID: string | undefined,
  currentState: { status: string; message: string } | undefined,
  data: FormData
) {
  if (!userID) return { status: "error", message: "User id is required" };
  try {
    const user = await rejectUserDAL(userID);
    if (user && "unauthorized" in user && user.unauthorized) {
      return {
        status: "error",
        message: "Unauthorized action",
      };
    }
    revalidateTag("userCount");
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
    console.log(id, role);
    const user = await updateRole(id, role);
    revalidateTag("users");
    revalidateTag("userCount");
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

export async function createAndUpdateUser(
  data: z.infer<typeof CreateNewUserFormSchema>,
  isUpdate?: boolean
) {
  const result = CreateNewUserFormSchema.safeParse(data);
  if (!result.success) return { failure: { error: "Invalid form data" } };
  try {
    if (isUpdate) {
      const user = await updateUser(data);
    } else {
      const hashedPassword = await bcrypt.hash(
        crypto.randomBytes(4).toString("hex"),
        10
      );
      await directCreateUser({
        data,
        hashedPassword,
      });
    }
    revalidateTag("userCount");
    revalidateTag("users");
    return {
      success: {
        message: "User updated successfully",
      },
    };
  } catch (error) {
    const e = error as PrismaClientKnownRequestError;
    if (e.code === "P2002") {
      const duplicateField = (e?.meta?.target as string[])[0];
      switch (duplicateField) {
        case "phoneNumber":
          return {
            failure: {
              error: "Phone number is already taken",
            },
          };
        case "email": {
          return {
            failure: {
              error: "Email is already taken",
            },
          };
        }
        case "id": {
          return {
            failure: {
              error: "ID must be unique",
            },
          };
        }
      }
    } else {
      return {
        failure: {
          error: "Something went wrong",
        },
      };
    }
  }
}

export async function deleteUser(id: string) {
  if (!id) return null;
  try {
    const user = await deleteUserDAL(id);
    revalidateTag("userCount");
    revalidateTag("users");
    return { success: { message: "User deleted successfully" } };
  } catch (error) {
    const e = error as Error;
    return { failure: { error: e.message } };
  }
}
