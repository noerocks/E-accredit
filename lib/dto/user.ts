import { User } from "../generated/prisma";

export function userProfileDTO(user: User) {
  return {
    email: user.email,
    fullName: `${user.firstName} ${user.lastName}`,
    photoURL: user?.photoURL,
  };
}

export async function usersDTO(users: User[]) {
  return users.map((user) => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    registrationDate: user.createdAt,
    role: user.role,
  }));
}
