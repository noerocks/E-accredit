"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import CreateUserForm from "./user-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UsersDTO } from "@/lib/dto/user";

const CreateUserSheet = ({
  user,
  hideTrigger,
  open,
  setOpen,
}: {
  user?: UsersDTO;
  hideTrigger?: boolean;
  open?: boolean;
  setOpen?: (value: boolean) => void;
}) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {!hideTrigger && (
        <SheetTrigger asChild>
          <Button>
            <Plus />
            New
          </Button>
        </SheetTrigger>
      )}
      <SheetContent className="flex flex-col h-full">
        <SheetHeader>
          <SheetTitle>Create New User</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex-1 min-h-0">
          <CreateUserForm user={user || null} />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default CreateUserSheet;
