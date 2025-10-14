import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SurveyVisitDisplayDTO } from "@/lib/dto/survey-visit";
import { formatAccreditationName } from "@/lib/utils";
import { FolderOpen } from "lucide-react";
import Link from "next/link";

const SelfSurveyCards = ({
  surveyVisits,
}: {
  surveyVisits: SurveyVisitDisplayDTO[] | null;
}) => {
  return (
    <div className="flex flex-wrap gap-5">
      {surveyVisits?.map((surveyVisit) => {
        const program = surveyVisit.accreditation.program;
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
                href={`/admin/self-survey/${
                  surveyVisit.id
                }?self-survey=${formatAccreditationName(
                  program.code,
                  surveyVisit.level
                )
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
