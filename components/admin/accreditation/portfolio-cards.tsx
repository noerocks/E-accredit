import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SurveyVisitWithSafeLevel } from "@/lib/dto/accreditation";
import { Program } from "@/lib/generated/prisma";
import { formatAccreditationName } from "@/lib/utils";
import { FolderOpen } from "lucide-react";
import Link from "next/link";

const PortfolioCards = ({
  program,
  surveyVisits,
}: {
  program: Program;
  surveyVisits: SurveyVisitWithSafeLevel[];
}) => {
  return (
    <div className="flex flex-wrap gap-5">
      {surveyVisits.map((visit) => (
        <Card key={visit.id} className="basis-[calc(33.33%-1rem)]">
          <CardHeader>
            <CardTitle className="text-xl">
              {formatAccreditationName(program.code, visit.level)}
            </CardTitle>
            <CardDescription>{program.name}</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-end gap-2">
            <Link
              href={`/admin/accreditation/${
                visit.id
              }?accreditation=${formatAccreditationName(
                program.code,
                visit.level
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
      ))}
    </div>
  );
};

export default PortfolioCards;
