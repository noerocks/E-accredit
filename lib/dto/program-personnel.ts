export type ProgramPersonnelDTO = {
  id: string;
  user: { id: string; firstName: string; lastName: string };
  assignedAt: Date;
};
