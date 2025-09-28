"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getSignedURL } from "@/lib/action/s3";
import { IndicatorDTO } from "@/lib/dto/instrument";
import { cn } from "@/lib/utils";
import { Info, Upload, X } from "lucide-react";
import { useCallback, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { toast } from "sonner";

const UploadFileForm = ({
  indicator,
}: {
  indicator: IndicatorDTO | undefined;
}) => {
  const [file, setFile] = useState<File | null>();
  const unattachFile = () => {
    setFile(null);
  };
  const uploadFile = async () => {
    if (!file) {
      toast.error("Please attach a file");
      return;
    }
    const { name, type, size } = file;
    const signedURLResult = await getSignedURL(name, type, size);
    if (signedURLResult.failure) return;
    const url = signedURLResult.success.url;
    await fetch(url, {
      method: "PUT",
      body: file,
      headers: {
        "Content-type": file.type,
      },
    });
  };
  const formatSize = (size: number) => {
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
    return `${(size / 1024 / 1024).toFixed(2)} MB`;
  };
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);
  const onDropRejected = useCallback((fileRejections: FileRejection[]) => {
    if (fileRejections.length > 0) {
      const tooManyFiles = fileRejections.find(
        (fileRejection) => fileRejection.errors[0].code === "too-many-files"
      );
      const fileTooLarge = fileRejections.find(
        (fileRejection) => fileRejection.errors[0].code === "file-too-large"
      );
      if (tooManyFiles) {
        toast.error("You can only upload a single file");
      }
      if (fileTooLarge) {
        toast.error("File size is too large");
      }
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    maxFiles: 1,
    maxSize: 1024 * 1024 * 10,
    accept: {
      "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        [],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
      "application/pdf": [],
      "image/png": [],
      "image/jpeg": [],
      "image/jpg": [],
    },
  });
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
          <Alert className="bg-blue-400/5 border-blue-400 text-blue-400">
            <Info />
            <AlertTitle>Info</AlertTitle>
            <AlertDescription className="text-blue-400">
              Supported file types: PDF, Word (.doc, .docx), Excel (.xls,
              .xlsx), PowerPoint (.ppt, .pptx), and images (PNG, JPG, JPEG). Max
              size: 10 MB.
            </AlertDescription>
          </Alert>
        </DialogHeader>
        <Card
          className={cn(
            "relative border-2 border-dashed h-52 transition-colors duration-200 ease-in-out w-full",
            isDragActive
              ? "border-primary bg-primary/10 border-solid"
              : "border-border hover:border-primary"
          )}
          {...getRootProps()}
        >
          <CardContent className="flex items-center justify-center h-full w-full">
            {file ? (
              <div className="flex items-center gap-2 p-2 border">
                <p>
                  {file.name} -{" "}
                  <span className="text-sm">{`${formatSize(file.size)}`}</span>
                </p>
                <span onClick={unattachFile}>
                  <X size={20} />
                </span>
              </div>
            ) : (
              <>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p className="text-center">Drop the file here ...</p>
                ) : (
                  <div className="flex flex-col items-center gap-y-3">
                    <p>Drag and drop a file here, or click to select file</p>
                    <Button>Select a File</Button>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={uploadFile}>Upload</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UploadFileForm;
