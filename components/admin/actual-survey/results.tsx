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
  calculateGrandMean,
  calculateRange,
  calculateWeightedVariance,
} from "@/lib/utils";
import { Level } from "@prisma/client";
import { Calendar, Info, User } from "lucide-react";

const SurveyResults = async ({
  areaFolders,
  level,
  surveyVisit,
  surveyTeam,
}: {
  areaFolders: AreaFolderDTO[];
  level: Level;
  surveyVisit: SurveyVisit | null;
  surveyTeam: SurveyTeam | null;
}) => {
  const grandMean = calculateGrandMean(areaFolders, SurveyTeamType.EXTERNAL);
  let descriptiveRating;
  if (grandMean) {
    if (grandMean >= 4.5 && grandMean <= 5.0) {
      descriptiveRating = "Excellent";
    } else if (grandMean >= 3.5 && grandMean <= 4.49) {
      descriptiveRating = "Very Good (or Very Satisfactory)";
    } else if (grandMean >= 2.5 && grandMean <= 3.49) {
      descriptiveRating = "Good";
    } else if (grandMean >= 1.5 && grandMean <= 2.49) {
      descriptiveRating = "Fair";
    } else if (grandMean >= 1.0 && grandMean <= 1.49) {
      descriptiveRating = "Poor";
    } else if (grandMean === 0) {
      descriptiveRating = "Not Functioning";
    }
  }
  const { min, max, range } = calculateRange(
    areaFolders as unknown as AreaFolderDTO[],
    SurveyTeamType.EXTERNAL
  ) || { min: null, max: null, range: 0 };
  const weightedVariance = calculateWeightedVariance(
    areaFolders as unknown as AreaFolderDTO[],
    SurveyTeamType.EXTERNAL
  );
  const weightedSD = Math.sqrt(
    calculateWeightedVariance(
      areaFolders as unknown as AreaFolderDTO[],
      SurveyTeamType.EXTERNAL
    )
  );
  return (
    <div>
      <div className="flex gap-2">
        <Card className="flex-1 bg-background flex flex-col">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Acquired Grand Mean
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col gap-2 justify-center">
            <p className="text-5xl text-green-500">{grandMean?.toFixed(2)}</p>
            <p className="text-sm">{descriptiveRating}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-sm text-muted-foreground">{`Required Grand Mean: ${level.requiredGrandMean}`}</p>
            <p className="text-sm text-muted-foreground">{`Required Area Mean: ${level.requiredAreaMean}`}</p>
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
              <p>{weightedVariance.toFixed()}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Info size={15} />
                Weighted Standard Deviation
              </p>
              <p>{weightedSD.toFixed(3)}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SurveyResults;
