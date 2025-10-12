import { Role } from "./generated/prisma";

export const accessControl: Record<Role, string[]> = {
  [Role.ADMIN]: ["/admin"],
  [Role.PENDING]: ["/pending"],
  [Role.ACCREDITATION_OFFICER]: ["/admin"],
  [Role.ACCREDITOR]: ["/admin"],
};

export function hasPermission(role: Role, pathname: string) {
  return accessControl[role].some((path) => pathname.startsWith(path));
}
