import { AreaChair, SurveyTeam, SurveyVisit } from "../generated/prisma";

export type SurveyVisitDTO = SurveyVisit & { surveyTeam: SurveyTeamDTO[] };

export type SurveyTeamDTO = SurveyTeam & { areaChairs: AreaChair[] };
