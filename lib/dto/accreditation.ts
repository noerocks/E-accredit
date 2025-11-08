import {
  Accreditation,
  Level,
  PhaseOneRequirements,
  PhaseTwoRequirements,
  Program,
  SurveyVisit,
} from "../generated/prisma";

export type SafeLevel = Omit<
  Level,
  "requiredGrandMean" | "requiredAreaMean"
> & {
  requiredGrandMean: number;
  requiredAreaMean: number;
};

export type SurveyVisitWithSafeLevel = SurveyVisit & {
  level: SafeLevel;
  phaseTwoRequirements: PhaseTwoRequirements;
  phaseOneRequirements: PhaseOneRequirements;
};

export type AccreditationDisplayDTO = Accreditation & {
  program: Program;
  level: SafeLevel;
  surveyVisits: SurveyVisitWithSafeLevel[];
};
