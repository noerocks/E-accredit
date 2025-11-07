import { Role } from "../generated/prisma";

export type UserProfileDTO = {
  email: string;
  fullName: string;
  photoURL: string | null;
  role: Role;
};

export type UsersDTO = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  registrationDate: Date;
  role: Role;
};
