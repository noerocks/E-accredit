import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SurveyVisitDisplayDTO } from "@/lib/dto/survey-visit";
import { SurveyTeamType } from "@/lib/generated/prisma";
import { formatAccreditationName } from "@/lib/utils";
import { Calendar, FolderOpen } from "lucide-react";
import Link from "next/link";

const SelfSurveyCards = ({
  surveyVisits,
  surveyType,
}: {
  surveyVisits: SurveyVisitDisplayDTO[] | null;
  surveyType: SurveyTeamType;
}) => {
  const surveyTypeName =
    surveyType === "INTERNAL" ? "self-survey" : "actual-survey";
  return (
    <div className="flex flex-wrap gap-5">
      {surveyVisits?.map((surveyVisit) => {
        const program = surveyVisit.accreditation.program;
        const level = surveyVisit.level;
        const startedAt =
          surveyType === "INTERNAL"
            ? surveyVisit.selfSurveyStartedAt
            : surveyVisit.actualSurveyStartedAt;
        const endedAt =
          surveyType === "INTERNAL"
            ? surveyVisit.selfSurveyEndedAt
            : surveyVisit.actualSurveyEndedAt;
        return (
          <Card key={surveyVisit.id} className="basis-[calc(33.33%-1rem)]">
            <CardHeader>
              <CardTitle className="text-xl">
                {formatAccreditationName(program.code, surveyVisit.level)}
              </CardTitle>
              <CardDescription>{program.name}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar size={15} />
                    Started at
                  </p>
                  <p className="text-sm">
                    {startedAt
                      ? `${new Date(startedAt!).toLocaleDateString(
                          "en-US"
                        )} - ${new Date(startedAt!).toLocaleTimeString(
                          "en-US"
                        )}`
                      : "--"}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar size={15} />
                    Ended at
                  </p>
                  <p className="text-sm">
                    {endedAt
                      ? `${new Date(endedAt!).toLocaleDateString(
                          "en-US"
                        )} - ${new Date(endedAt!).toLocaleTimeString("en-US")}`
                      : "--"}
                  </p>
                </div>
              </div>
              <Link
                href={`/admin/${
                  level.phase === "PHASE_2"
                    ? "phase-two-survey"
                    : surveyTypeName
                }/${surveyVisit.id}?${
                  level.phase === "PHASE_2"
                    ? "phase-two-survey"
                    : surveyTypeName
                }=${formatAccreditationName(program.code, surveyVisit.level)
                  .split(" ")
                  .join("+")}`}
                className="self-end"
              >
                <Button variant="outline">
                  <FolderOpen />
                  Open
                </Button>
              </Link>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default SelfSurveyCards;
