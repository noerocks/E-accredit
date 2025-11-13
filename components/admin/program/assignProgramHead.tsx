"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UsersDTO } from "@/lib/dto/user";
import { useEffect, useState, useTransition } from "react";
import { assignProgramHead as assignProgramHeadAction } from "@/lib/action/program-personnel";
import { ProgramPersonnelDTO } from "@/lib/dto/program-personnel";
import { SessionPayload } from "@/lib/definitions";

const AssignProgramHead = ({
  programId,
  accreditationOfficers,
  programHeadUserId,
  programPersonnel,
  user,
}: {
  programId: string;
  accreditationOfficers: UsersDTO[] | null;
  programHeadUserId: string | undefined;
  programPersonnel: ProgramPersonnelDTO[] | null;
  user: SessionPayload;
}) => {
  const [selectedUserId, setSelectedUserId] = useState<string | undefined>(
    programHeadUserId
  );
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    setSelectedUserId(programHeadUserId);
  }, [programHeadUserId]);

  const assignProgramHead = async (userId: string) => {
    setSelectedUserId(userId);
    startTransition(async () => {
      const personnel = programPersonnel?.find(
        (personnel) => personnel.user.id === userId
      );
      await assignProgramHeadAction(userId, programId, personnel?.id);
    });
  };

  const selectedOfficer = accreditationOfficers?.find(
    (x) => x.id === selectedUserId
  );

  console.log("Program Head:", selectedOfficer?.firstName);

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-muted-foreground text-center">Program Head</p>
      <Select
        onValueChange={assignProgramHead}
        value={selectedUserId}
        disabled={user.role !== "ADMIN"}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Please select a user" />
        </SelectTrigger>
        <SelectContent>
          {accreditationOfficers?.map((officer) => (
            <SelectItem key={officer.id} value={officer.id}>
              {`${officer.firstName} ${officer.lastName}`}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default AssignProgramHead;
