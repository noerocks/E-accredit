export const accessControl: Record<string, string[]> = {
  ADMIN: ["/admin"],
  PENDING: ["/pending"],
  ACCREDITATION_OFFICER: ["/admin"],
  ACCREDITOR: ["/admin"],
};

export function hasPermission(role: string, pathname: string) {
  return accessControl[role].some((path) => pathname.startsWith(path));
}
