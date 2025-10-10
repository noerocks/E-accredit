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
import { Checkbox } from "@/components/ui/checkbox";
import { assignMember, deleteMember } from "@/lib/action/member";
import { useTransition } from "react";

const TaskForce = ({
  programPersonnel,
  taskForce,
  areaFolderId,
  isAdmin,
}: {
  programPersonnel: ProgramPersonnelDTO[] | null;
  taskForce: TaskforceDTO | null | undefined;
  areaFolderId: string | undefined;
  isAdmin: boolean;
}) => {
  const assignChairperson = async (id: string) => {
    const member = taskForce?.taskForceMember.find(
      (member) => member.programPersonnelId === id
    );
    const result = await assignChairpersonAction(id, areaFolderId, member?.id);
  };
  const [pending, startTransition] = useTransition();
  const toggleAssignMember = async (personnelId: string, checked: boolean) => {
    if (checked) {
      startTransition(async () => {
        const result = await assignMember(personnelId, taskForce?.id);
      });
    } else {
      startTransition(async () => {
        const member = taskForce?.taskForceMember.find(
          (member) => (member.programPersonnelId = personnelId)
        );
        if (member?.id) {
          const result = await deleteMember(member.id);
        }
      });
    }
  };
  const isMember = (personnelId: string) => {
    return taskForce?.taskForceMember.find(
      (member) => member.programPersonnelId === personnelId
    )
      ? true
      : false;
  };
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
        <Card className="bg-background">
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
              disabled={!isAdmin}
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
        <Card className="bg-background">
          <CardContent className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground text-balance text-center">
              Members
            </p>
            <div className="flex flex-col gap-1">
              {programPersonnel
                ?.filter(
                  (personnel) => personnel.id !== taskForce?.chairPerson?.id
                )
                .map((personnel) => (
                  <div className="flex items-center gap-2" key={personnel.id}>
                    <Checkbox
                      onCheckedChange={toggleAssignMember.bind(
                        null,
                        personnel.id
                      )}
                      checked={isMember(personnel.id)}
                      disabled={pending || !isAdmin}
                    />
                    <p className="text-sm">{`${personnel.user.firstName} ${personnel.user.lastName}`}</p>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </SheetContent>
    </Sheet>
  );
};

export default TaskForce;
