"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IndicatorDTO } from "@/lib/dto/instrument";
import { Upload } from "lucide-react";

const UploadFileForm = ({
  indicator,
}: {
  indicator: IndicatorDTO | undefined;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center">
          <Upload />
          <span>Upload a file</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            Upload an Evidence File
          </DialogTitle>
          <DialogDescription>{`Attach an evidence file to ${indicator?.label}: ${indicator?.evidence}`}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UploadFileForm;
