"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProgramPersonnelDTO } from "@/lib/dto/program-personnel";
import { Minus } from "lucide-react";

const ProgramPersonnel = ({
  programPersonnel,
}: {
  programPersonnel: ProgramPersonnelDTO[] | null;
}) => {
  return (
    <Card className="flex flex-col gap-2 p-2 rounded-sm max-h-52 overflow-auto">
      {programPersonnel?.map((personnel) => (
        <div className="flex justify-between items-center" key={personnel.id}>
          <p className="text-sm">{`${personnel.user.firstName} ${personnel.user.lastName}`}</p>
          <Button variant="destructive" className="h-6 w-6">
            <Minus />
          </Button>
        </div>
      ))}
    </Card>
  );
};

export default ProgramPersonnel;
