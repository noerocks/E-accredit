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
  let status =
    level?.label === "PRELIMINARY_SURVEY_VISIT" ? "CANDIDATE" : level?.label;
  let first;
  switch (status) {
    case "CANDIDATE":
      first =
        "1. A preliminary survey visit was conducted by AACCUP team of accreditors";
      break;
    case "LEVEL_I":
      first =
        "1. A first survey visit was conducted by AACCUP team of accreditors;";
      break;
    case "LEVEL_II":
      first =
        "1. A second survey visit was conducted by AACCUP team of accreditors;";
      break;
    case "LEVEL_III":
      first =
        "1. A third survey visit was conducted by AACCUP team of accreditors;";
      break;
    case "LEVEL_IV":
      first =
        "1. A fourth survey visit was conducted by AACCUP team of accreditors;";
      break;
  }
  status = screamingSnakeToTitle(status!)
    ?.split(" ")
    .map((word, i) => (i === 1 ? word.toUpperCase() : word))
    .join(" ");
  return (
    <div className="flex flex-col gap-2">
      <Card className="bg-background">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {`${status} Status Qualifications`}
            <Award className="text-yellow-500" />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">{first}</p>
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
          {level?.rank === 4 && (
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-sm">
                In addition, to qualify for Level III re-accredited status, an
                undergraduate program must satisfy the first two of the
                following criteria and two others of the succeeding ones:
              </p>
              <div className="text-sm text-muted-foreground flex flex-col gap-2">
                <p>a. a reasonably high standard of instruction;</p>
                <p>
                  b. a highly visible community extension program. A description
                  of the programs, the nature and extent of student, faculty and
                  staff involvement, and other details shall be required
                  documentation for this indicator;
                </p>
                <p>
                  c. a highly visible research tradition. The following must be
                  observable over a reasonable period of time:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>provision for a reasonable budget</li>
                  <li>quality of completed outputs</li>
                  <li>measurable results such as publication, etc</li>
                  <li>
                    involvement of a significant number of faculty members
                  </li>
                  <li>
                    visible, tangible and measurable impact on the community
                  </li>
                </ul>
                <p>
                  d. a strong faculty development tradition evidenced in
                  licensure examinations over the last three years (will apply
                  only to those programs where such examinations are required).
                </p>
                <p>
                  e. existence of working consortia or linkages with other
                  schools and/or agencies. Documentary evidence shall include a
                  description of the nature, mechanism, working agreements and
                  other details of consortia.
                </p>
                <p>
                  f. extensive and functional library and other learning
                  resource facilities.
                </p>
              </div>
            </div>
          )}
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
        <Deferred
          failedAreas={failedAreas}
          surveyResultStatus={surveyResultStatus}
        />
      )}
      {!grandMeanPassed && (
        <NotGranted
          failedAreas={areaFolders}
          surveyResultStatus={surveyResultStatus}
        />
      )}
    </div>
  );
};

export default NextSteps;
