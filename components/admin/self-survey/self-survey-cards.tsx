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
import { FolderOpen } from "lucide-react";
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
        return (
          <Card key={surveyVisit.id} className="basis-[calc(33.33%-1rem)]">
            <CardHeader>
              <CardTitle className="text-xl">
                {formatAccreditationName(program.code, surveyVisit.level)}
              </CardTitle>
              <CardDescription>{program.name}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-end">
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
              >
                <Button size="icon" variant="outline">
                  <FolderOpen />
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
