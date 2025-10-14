"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AccreditationDisplayDTO,
  SafeLevel,
  SurveyVisitWithSafeLevel,
} from "@/lib/dto/accreditation";
import { formatAccreditationName } from "@/lib/utils";
import { FolderOpen } from "lucide-react";
import Link from "next/link";

const AccreditationCards = ({
  accreditations,
}: {
  accreditations: AccreditationDisplayDTO[] | null;
}) => {
  const getHighestLevel = (surveyVisits: SurveyVisitWithSafeLevel[]) => {
    return surveyVisits.reduce(
      (highest, sv) => {
        return highest.level.rank < sv.level.rank ? highest : sv;
      },
      {
        level: { rank: Number.MAX_SAFE_INTEGER } as SafeLevel,
      } as SurveyVisitWithSafeLevel
    );
  };
  return (
    <div className="flex flex-wrap gap-5">
      {accreditations?.map((a) => {
        const surveyVisit = getHighestLevel(a.surveyVisits);
        if (a.surveyVisits.length > 0) {
          return (
            <Card key={a.id} className="basis-[calc(33.33%-1rem)]">
              <CardHeader>
                <CardTitle className="text-xl">
                  {formatAccreditationName(a.program.code, surveyVisit.level)}
                </CardTitle>
                <CardDescription>{a.program.name}</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-end gap-2">
                <Link
                  href={`/admin/accreditation/${
                    surveyVisit.id
                  }?accreditation=${formatAccreditationName(
                    a.program.code,
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
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default AccreditationCards;
