export type SessionPayload = {
  id: string;
  email: string;
  role: "ADMIN" | "USER" | "PENDING";
  name: string;
  expiresAt: Date;
};
