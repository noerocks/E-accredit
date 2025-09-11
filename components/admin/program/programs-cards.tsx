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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ProgramDTO } from "@/lib/dto/programs";
import { Users } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const ProgramsCards = ({
  children,
  programs,
}: {
  children: React.ReactNode;
  programs: ProgramDTO[];
}) => {
  const [open, setOpen] = useState(false);
  const [selectedPogram, setSelectedProgram] = useState<ProgramDTO | undefined>(
    undefined
  );
  const [action, setAction] = useState<string | undefined>(undefined);
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const button = target.closest<HTMLButtonElement>("[data-action]");
    if (!button) return;
    const { id, action } = button.dataset;
    const program = programs.find((program) => program.id === id);
    if (action === "viewPersonnel") {
      const params = new URLSearchParams(searchParams);
      params.set("id", program?.id || "");
      router.replace(`${pathName}?${params.toString()}`);
    }
    setOpen(true);
    setSelectedProgram(program);
    setAction(action);
  };
  const onOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      router.replace(pathName);
    }
    setOpen(isOpen);
  };
  return (
    <>
      <div className="flex flex-wrap gap-5" onClick={onClick}>
        {programs.map((program) => (
          <Card
            key={program.id}
            className="basis-[calc(33.33%-1rem)] grow-0 shrink"
          >
            <CardHeader>
              <CardTitle className="text-xl">{program.code}</CardTitle>
              <CardDescription>{program.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-end gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      variant="outline"
                      data-action="viewPersonnel"
                      data-id={program.id}
                    >
                      <Users />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Personnel</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">{`${selectedPogram?.code} Personnel`}</DialogTitle>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProgramsCards;
