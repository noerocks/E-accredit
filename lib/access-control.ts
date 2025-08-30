import { Role } from "./generated/prisma";

export const accessControl: Record<Role, string[]> = {
  [Role.ADMIN]: ["/admin"],
  [Role.USER]: ["/user"],
  [Role.PENDING]: ["/pending"],
};

export function hasPermission(role: Role, pathname: string) {
  return accessControl[role].some((path) => pathname.startsWith(path));
}
