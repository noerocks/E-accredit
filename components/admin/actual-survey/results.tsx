import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { findById } from "@/lib/dal/user";
import { AreaFolderDTO } from "@/lib/dto/accreditation-instrument";
import { SurveyVisitDTO } from "@/lib/dto/survey-visit";
import {
  SurveyTeam,
  SurveyTeamType,
  SurveyVisit,
} from "@/lib/generated/prisma";
import {
  calculateAreaMean,
  calculateAttentionScore,
  calculateGrandMean,
  calculateRange,
  calculateWeightedVariance,
  getSDDescriptiveRating,
} from "@/lib/utils";
import { Level } from "@prisma/client";
import { Calendar, Info, User } from "lucide-react";
import { AreaMeanChart } from "./area-mean-chart";
import { CriticalAreaChart } from "./critical-area-chart";
import clsx from "clsx";

const SurveyResults = async ({
  areaFolders,
  level,
  surveyType,
}: {
  areaFolders: AreaFolderDTO[];
  level: Level;
  surveyType: SurveyTeamType;
}) => {
  const grandMean = calculateGrandMean(areaFolders, surveyType);
  const grandMeanPassed = grandMean! >= Number(level?.requiredGrandMean);
  const failedAreas = areaFolders.filter(
    (area) =>
      (calculateAreaMean(area, surveyType) || 0) <
      Number(level?.requiredAreaMean)
  );
  const { min, max, range } = calculateRange(
    areaFolders as unknown as AreaFolderDTO[],
    surveyType
  ) || { min: null, max: null, range: 0 };
  const weightedVariance = calculateWeightedVariance(
    areaFolders as unknown as AreaFolderDTO[],
    surveyType
  );
  const weightedSD = Math.sqrt(
    calculateWeightedVariance(
      areaFolders as unknown as AreaFolderDTO[],
      surveyType
    )
  );
  const sdDescriptiveRating = getSDDescriptiveRating(
    weightedSD,
    grandMean!,
    Number(level.requiredGrandMean)
  );
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5">
        <Card className="flex-1 bg-background flex flex-col">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Survey Results Overview
            </CardTitle>
          </CardHeader>
          <CardContent
            className={clsx("flex-1 flex flex-col gap-2 justify-center", {
              "text-green-500": grandMeanPassed && failedAreas.length === 0,
              "text-yellow-500": grandMeanPassed && failedAreas.length > 0,
              "text-red-500": !grandMeanPassed,
            })}
          >
            <p className="text-5xl">{grandMean?.toFixed(2)}</p>
            <p className="text-sm">
              {grandMeanPassed
                ? "Grand mean meets the required standard."
                : "Grand mean is below the required standard."}
            </p>
            {failedAreas.length > 0 && (
              <p className="text-sm">
                {`${failedAreas.length} area(s) did not meet the required area mean of ${level.requiredAreaMean}.`}
              </p>
            )}
            {failedAreas.length === 0 && (
              <p className="text-sm">All areas meet the required area mean.</p>
            )}
          </CardContent>
          <CardFooter className="flex justify-between text-sm text-muted-foreground">
            <p>{`Required Grand Mean: ${level.requiredGrandMean}`}</p>
            <p>{`Required Area Mean: ${level.requiredAreaMean}`}</p>
          </CardFooter>
        </Card>
        <Card className="flex-1 bg-background">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Statistics
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Info size={15} />
                Highest Area
              </p>
              <div className="flex items-center gap-5">
                <p className="text-sm text-muted-foreground">
                  {max?.area.label}
                </p>
                <p>{max?.mean?.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Info size={15} />
                Lowest Area
              </p>
              <div className="flex items-center gap-5">
                <p className="text-sm text-muted-foreground">
                  {min?.area.label}
                </p>
                <p>{min?.mean?.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Info size={15} />
                Range
              </p>
              <p>{range.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Info size={15} />
                Weighted Variance
              </p>
              <p>{weightedVariance.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Info size={15} />
                Weighted Standard Deviation
              </p>
              <p>{weightedSD.toFixed(2)}</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <Alert className="bg-background">
        <Info />
        <AlertTitle>Descriptive Rating</AlertTitle>
        <AlertDescription>
          <p>{sdDescriptiveRating}</p>
        </AlertDescription>
      </Alert>
      <div className="flex gap-5 items-start">
        <AreaMeanChart
          areaFolders={areaFolders as unknown as AreaFolderDTO[]}
        />
        <CriticalAreaChart
          areaFolders={areaFolders as unknown as AreaFolderDTO[]}
          surveyType={surveyType}
        />
      </div>
    </div>
  );
};

export default SurveyResults;
