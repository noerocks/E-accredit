import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Users } from "lucide-react";

const TaskForce = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex items-center gap-2">
          <Users size={15} />
          Taskforce
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Taskforce</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default TaskForce;
