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
import { FolderOpen } from "lucide-react";

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
        const highestLevel = getHighestLevel(a.surveyVisits);
        if (a.surveyVisits.length > 0) {
          return (
            <Card key={a.id} className="basis-[calc(33.33%-1rem)]">
              <CardHeader>
                <CardTitle className="text-xl">
                  {a.program.code} -{" "}
                  {`${highestLevel?.level.label} ${highestLevel?.level.phase
                    .split("_")
                    .map(
                      (word) =>
                        word[0].toLocaleUpperCase() +
                        word.slice(1).toLocaleLowerCase()
                    )
                    .join(" ")}`}
                </CardTitle>
                <CardDescription>{a.program.name}</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-end gap-2">
                <Button size="icon" variant="outline">
                  <FolderOpen />
                </Button>
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
