enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  PENDING = "PENDING",
}

export type SessionPayload = {
  id: string;
  email: string;
  role: Role;
  name: string;
  expiresAt: Date;
};
