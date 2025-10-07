import {
  ProgramPersonnel,
  TaskForce,
  TaskForceMember,
  User,
} from "../generated/prisma";

export type ProgramPersonnelDTO = ProgramPersonnel & { user: User };

export type TaskForceMemberDTO = TaskForceMember & {
  programPersonnel: ProgramPersonnelDTO;
};

export type TaskforceDTO = TaskForce & {
  chairPerson: ProgramPersonnelDTO | null;
  taskForceMember: TaskForceMemberDTO[];
};
