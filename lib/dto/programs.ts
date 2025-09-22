import { Accreditation } from "../generated/prisma";

export type ProgramsNamesAndIdDTO = {
  id: string;
  name: string;
};

export type ProgramDTO = {
  id: string;
  name: string;
  code: string;
  department: string;
  folderId: string;
  accreditation: Accreditation | null;
};
