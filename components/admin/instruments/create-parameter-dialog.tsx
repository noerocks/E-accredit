import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FolderPlus } from "lucide-react";

const CreateParameterDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <FolderPlus />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            {"Add New Parameter"}
          </DialogTitle>
          <DialogDescription>
            Create new parameter under this area
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateParameterDialog;
