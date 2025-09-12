"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { removeProgramPersonnel } from "@/lib/action/program-personnel";
import { ProgramPersonnelDTO } from "@/lib/dto/program-personnel";
import { Minus } from "lucide-react";
import { toast } from "sonner";

const ProgramPersonnel = ({
  programPersonnel,
}: {
  programPersonnel: ProgramPersonnelDTO[] | null;
}) => {
  const onClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const button = target.closest<HTMLButtonElement>("[data-action]");
    if (!button) return;
    const { action, id } = button.dataset;
    if (action === "remove") {
      const result = await removeProgramPersonnel(id);
      switch (result?.status) {
        case "success":
          toast.success(result.message);
          break;
        case "error":
          toast.error(result.message);
          break;
      }
    }
  };
  return (
    <Card
      className="flex flex-col gap-2 p-2 rounded-sm max-h-52 overflow-auto"
      onClick={onClick}
    >
      {programPersonnel?.map((personnel) => (
        <div className="flex justify-between items-center" key={personnel.id}>
          <p className="text-sm">{`${personnel.user.firstName} ${personnel.user.lastName}`}</p>
          <Button
            variant="destructive"
            className="h-6 w-6"
            data-action="remove"
            data-id={personnel.id}
          >
            <Minus />
          </Button>
        </div>
      ))}
    </Card>
  );
};

export default ProgramPersonnel;
