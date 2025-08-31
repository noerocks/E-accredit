import { User } from "../generated/prisma";

export function DisplayUserDTO(user: User) {
  return {
    email: user.email,
    fullName: `${user.firstName} ${user.lastName}`,
    photoURL: user?.photoURL,
  };
}
