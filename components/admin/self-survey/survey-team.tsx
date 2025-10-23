"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
import { UsersDTO } from "@/lib/dto/user";
import {
  SurveyTeam as SurveyTeamSchema,
  SurveyTeamType,
} from "@/lib/generated/prisma";
import { User } from "@prisma/client";
import { Users } from "lucide-react";
import { useTransition } from "react";
import { assignCoordinator as assignCoordinatorAction } from "@/lib/action/area-chair";
import { toast } from "sonner";

const SurveyTeam = ({
  programHead,
  accreditors,
  surveyTeam,
}: {
  programHead: User | null | undefined;
  accreditors: UsersDTO[] | null;
  surveyTeam: SurveyTeamSchema;
}) => {
  const [transition, startTransition] = useTransition();
  const assignCoordinator = async (type: SurveyTeamType, value: string) => {
    startTransition(async () => {
      const result = await assignCoordinatorAction(
        value,
        SurveyTeamType.EXTERNAL,
        surveyTeam.id
      );
      if (result?.failure) toast.error(result.failure.error);
    });
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Users />
          Coordinators
        </Button>
      </SheetTrigger>
      <SheetContent className="px-4">
        <SheetHeader>
          <SheetTitle>Coordinators</SheetTitle>
        </SheetHeader>
        <Card className="bg-background">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground text-center">
              Internal Over-all Coordinator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              defaultValue={`${programHead?.firstName} ${programHead?.lastName}`}
              disabled
            />
          </CardContent>
        </Card>
        <Card className="bg-background">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground text-center">
              External Over-all Coordinator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select
              onValueChange={assignCoordinator.bind(
                null,
                SurveyTeamType.EXTERNAL
              )}
              defaultValue={surveyTeam.teamLeadId || undefined}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Please select an accreditation officer" />
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

export default SurveyTeam;
