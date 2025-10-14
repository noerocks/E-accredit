import {
  Accreditation,
  AreaChair,
  Level,
  Program,
  SurveyTeam,
  SurveyVisit,
} from "../generated/prisma";

export type SurveyVisitDTO = SurveyVisit & { surveyTeam: SurveyTeamDTO[] };

export type SurveyTeamDTO = SurveyTeam & { areaChairs: AreaChair[] };

export type SurveyVisitDisplayDTO = SurveyVisit & {
  accreditation: Accreditation & {
    program: Program;
  };
  level: Level;
};
