import {
  Accreditation,
  AreaChair,
  Level,
  Program,
  Rating,
  SurveyTeam,
  SurveyVisit,
  User,
} from "../generated/prisma";

export type SurveyVisitDTO = SurveyVisit & { surveyTeam: SurveyTeamDTO[] };

export type SurveyTeamDTO = SurveyTeam & { areaChairs: AreaChair[] };

export type SurveyVisitDisplayDTO = SurveyVisit & {
  accreditation: Accreditation & {
    program: Program;
  };
  level: Level;
};

export type SafeRating = Omit<Rating, "finalRate"> & {
  finalRate: number | null;
};

export type RatingDTO = SafeRating & {
  accreditor: User;
};
