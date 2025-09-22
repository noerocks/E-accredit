import { Phase } from "../generated/prisma";

export type LevelDTO = {
  id: string;
  rank: number;
  label: string;
  phase: Phase;
};
