"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { assignAreaChair } from "@/lib/action/area-chair";
import { SurveyVisitDTO } from "@/lib/dto/survey-visit";
import { UsersDTO } from "@/lib/dto/user";
import { UserCheck } from "lucide-react";
import { toast } from "sonner";

const Accreditors = ({
  accreditors,
  surveyVisit,
  areaFolderId,
}: {
  accreditors: UsersDTO[] | null;
  surveyVisit: SurveyVisitDTO | null;
  areaFolderId: string | undefined;
}) => {
  const internalSurveyTeam = surveyVisit?.surveyTeam.find(
    (team) => team.type === "INTERNAL"
  );
  const internalAreaChair = internalSurveyTeam?.areaChairs[0];
  const externalSurveyTeam = surveyVisit?.surveyTeam.find(
    (team) => team.type === "EXTERNAL"
  );
  const assignInternalAreaChair = async (value: string) => {
    const accreditor = accreditors?.find(
      (accreditor) => accreditor.id === value
    );
    const result = await assignAreaChair(
      accreditor?.id,
      internalSurveyTeam?.id,
      areaFolderId
    );
    if (result.failure) toast.error(result.failure.error);
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <UserCheck />
          Accreditors
        </Button>
      </SheetTrigger>
      <SheetContent className="px-4">
        <SheetHeader>
          <SheetTitle>Accreditors</SheetTitle>
        </SheetHeader>
        <Card className="rounded-md bg-background">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground text-center">
              Internal Area Chair
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select
              onValueChange={assignInternalAreaChair}
              defaultValue={internalAreaChair?.userId}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Please select an accreditor" />
              </SelectTrigger>
              <SelectContent>
                {accreditors?.map((accreditor) => (
                  <SelectItem
                    value={accreditor.id}
                    key={accreditor.id}
                  >{`${accreditor.firstName} ${accreditor.lastName}`}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
        <Card className="rounded-md bg-background">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground text-center">
              External Area Chair
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select
              onValueChange={(value) => {
                console.log(value);
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Please select an accreditor" />
              </SelectTrigger>
              <SelectContent>
                {accreditors?.map((accreditor) => (
                  <SelectItem
                    value={accreditor.id}
                    key={accreditor.id}
                  >{`${accreditor.firstName} ${accreditor.lastName}`}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </SheetContent>
    </Sheet>
  );
};

export default Accreditors;
