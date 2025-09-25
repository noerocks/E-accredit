"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AccreditationDisplayDTO } from "@/lib/dto/accreditation";

const AccreditationCards = ({
  accreditations,
}: {
  accreditations: AccreditationDisplayDTO[] | null;
}) => {
  return (
    <div className="flex flex-wrap gap-5">
      {accreditations?.map((a) => (
        <Card key={a.id} className="basis-[calc(33.33%-1rem)]">
          <CardHeader>
            <CardTitle className="text-xl">
              {a.program.code} -{" "}
              {`${a.surveyVisits[0].level.label} ${a.surveyVisits[0].level.phase
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
        </Card>
      ))}
    </div>
  );
};

export default AccreditationCards;
