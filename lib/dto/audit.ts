import { AuditTrail, User } from "../generated/prisma";

export type ActivityDTO = AuditTrail & { actor: User };
