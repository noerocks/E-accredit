import { Role } from "./generated/prisma";

export type SessionPayload = {
  id: string;
  email: string;
  role: Role;
  name: string;
  expiresAt: Date;
};
