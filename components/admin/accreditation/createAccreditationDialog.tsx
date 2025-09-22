"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InstrumentDisplayDTO } from "@/lib/dto/instrument";
import { ProgramDTO } from "@/lib/dto/programs";
import { Plus } from "lucide-react";

const CreateAccreditationDialog = ({
  programs,
  instruments,
}: {
  programs: ProgramDTO[];
  instruments: InstrumentDisplayDTO[] | null;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <span className="flex items-center gap-2">
            <Plus />
            New
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            Add New Accreditation
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateAccreditationDialog;
