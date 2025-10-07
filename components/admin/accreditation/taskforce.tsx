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
import { ProgramPersonnelDTO } from "@/lib/dto/program-personnel";
import { TaskforceDTO } from "@/lib/dto/taskforce";
import { Users } from "lucide-react";
import { assignChairperson as assignChairpersonAction } from "@/lib/action/taskforce";

const TaskForce = ({
  programPersonnel,
  taskForce,
  areaFolderId,
}: {
  programPersonnel: ProgramPersonnelDTO[] | null;
  taskForce: TaskforceDTO | null | undefined;
  areaFolderId: string | undefined;
}) => {
  const assignChairperson = async (id: string) => {
    const result = await assignChairpersonAction(id, areaFolderId);
  };
  console.log(taskForce?.chairPerson);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex items-center gap-2">
          <Users size={15} />
          Taskforce
        </Button>
      </SheetTrigger>
      <SheetContent className="p-5">
        <SheetHeader>
          <SheetTitle>Taskforce</SheetTitle>
        </SheetHeader>
        <Card>
          <CardContent className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground text-balance text-center">
              Chairperson
            </p>
            <Select
              onValueChange={assignChairperson}
              defaultValue={
                taskForce && taskForce.chairPerson
                  ? taskForce.chairPersonId!
                  : undefined
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Please select a program personnel" />
              </SelectTrigger>
              <SelectContent>
                {programPersonnel?.map((personnel) => (
                  <SelectItem
                    value={personnel.id}
                    key={personnel.id}
                  >{`${personnel.user.firstName} ${personnel.user.lastName}`}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </SheetContent>
    </Sheet>
  );
};

export default TaskForce;
