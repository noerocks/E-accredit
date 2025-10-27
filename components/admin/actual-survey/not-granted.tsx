import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AreaFolderDTO } from "@/lib/dto/accreditation-instrument";
import ScheduleRevisit from "./schedule-revisit";
import { SurveyResultStatus } from "@/lib/generated/prisma";

const NotGranted = ({
  failedAreas,
  surveyResultStatus,
}: {
  failedAreas: AreaFolderDTO[];
  surveyResultStatus: SurveyResultStatus;
}) => {
  return (
    <Card className="bg-background">
      <CardHeader>
        <CardTitle className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
          <p className="text-sm text-muted-foreground">Evaluation Outcome</p>
          <p className="text-red-500 font-medium">Failed</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p className="text-sm">
          A repeat survey will be conducted to reassess all areas, as the
          program did not attain the required minimum grand mean. The schedule
          for the repeat survey will be set by the coordinator.
        </p>
        {failedAreas.length > 0 && (
          <p className="text-sm text-muted-foreground">
            The following area{failedAreas.length > 1 ? "s" : ""} require a
            revisit: {failedAreas.map((area) => area.area.label).join(", ")}.
          </p>
        )}
      </CardContent>
      {surveyResultStatus !== "NOT_GRANTED" && (
        <CardFooter className="flex justify-end">
          <ScheduleRevisit
            failedAreas={failedAreas}
            surveyResultStatus={SurveyResultStatus.NOT_GRANTED}
          />
        </CardFooter>
      )}
    </Card>
  );
};

export default NotGranted;
