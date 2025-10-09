import { Accreditation, User } from "../generated/prisma";
import { LevelDTO } from "./level";

export type ProgramsNamesAndIdDTO = {
  id: string;
  name: string;
};

export type ProgramDTO = {
  id: string;
  name: string;
  code: string;
  major: string | null;
  department: string;
  programHead: User | null;
  accreditation: Accreditation | null;
};
