import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaFolderDTO } from "@/lib/dto/accreditation-instrument";
import {
  Level,
  Program,
  SurveyResultStatus,
  SurveyTeamType,
} from "@/lib/generated/prisma";
import {
  calculateAreaMean,
  calculateGrandMean,
  screamingSnakeToTitle,
} from "@/lib/utils";
import { Award, Check, X } from "lucide-react";
import Grandted from "./granted";
import Deferred from "./deferred";
import NotGranted from "./not-granted";

const NextSteps = ({
  level,
  areaFolders,
  program,
  accreditationId,
  surveyResultStatus,
}: {
  level: Level | undefined;
  areaFolders: AreaFolderDTO[];
  program: Program;
  accreditationId: string | undefined;
  surveyResultStatus: SurveyResultStatus;
}) => {
  const grandMean = calculateGrandMean(areaFolders, SurveyTeamType.EXTERNAL);
  const grandMeanPassed = grandMean! >= Number(level?.requiredGrandMean);
  const failedAreas = areaFolders.filter(
    (area) =>
      (calculateAreaMean(area, SurveyTeamType.EXTERNAL) || 0) <
      Number(level?.requiredAreaMean)
  );
  const status =
    level?.label === "PRELIMINARY_SURVEY_VISIT" ? "CANDIDATE" : level?.label;
  return (
    <div className="flex flex-col gap-2">
      <Card className="bg-background">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {`${screamingSnakeToTitle(status!)} Status Qualifications`}
            <Award className="text-yellow-500" />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              1. The program will undergo a preliminary survey visit conducted
              by external accreditors in collaboration with the SUC's internal
              accreditors.
            </p>
            <Check size={15} className="text-green-500" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              2. The program must achieve a grand mean rating of at least{" "}
              <strong>{Number(level?.requiredGrandMean)}</strong> as assessed by
              the accreditation team.
            </p>
            {grandMeanPassed ? (
              <Check size={15} className="text-green-500" />
            ) : (
              <X size={15} className="text-red-500" />
            )}
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              3. Each area of the program must have an area mean rating not
              lower than <strong>{Number(level?.requiredAreaMean)}</strong>.
            </p>
            {failedAreas.length === 0 ? (
              <Check size={15} className="text-green-500" />
            ) : (
              <X size={15} className="text-red-500" />
            )}
          </div>
        </CardContent>
      </Card>
      {grandMeanPassed && failedAreas.length === 0 && (
        <Grandted
          status={status!}
          program={program!}
          accreditationId={accreditationId}
          level={level}
          surveyResultStatus={surveyResultStatus}
        />
      )}
      {grandMeanPassed && failedAreas.length > 0 && (
        <Deferred failedAreas={failedAreas} />
      )}
      {!grandMeanPassed && failedAreas.length > 0 && (
        <NotGranted failedAreas={areaFolders} />
      )}
    </div>
  );
};

export default NextSteps;
