"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import axios from "axios";
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
import { createNewVersion } from "@/lib/action/file-version";
import { getSignedURL } from "@/lib/action/s3";
import { IndicatorDTO } from "@/lib/dto/instrument";
import { cn } from "@/lib/utils";
import { Info, Loader, Upload, X } from "lucide-react";
import { useCallback, useState, useTransition } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";
import { Area } from "@/lib/generated/prisma";
import { SessionPayload } from "@/lib/definitions";

const UploadFileForm = ({
  indicator,
  evidenceFileId,
  area,
  areaFileId,
  user,
}: {
  indicator?: IndicatorDTO | undefined;
  evidenceFileId?: string;
  area?: Area;
  areaFileId?: string;
  user: SessionPayload;
}) => {
  const [file, setFile] = useState<File | null>();
  const [progress, setProgress] = useState<number>(0);
  const [pending, startTransition] = useTransition();
  const unattachFile = () => {
    setFile(null);
  };
  const uploadFile = async () => {
    startTransition(async () => {
      if (!file) {
        toast.error("Please attach a file");
        return;
      }
      const { name, type, size } = file;
      const signedURLResult = await getSignedURL(name, type, size);
      if (signedURLResult.failure) return;
      const url = signedURLResult.success.url;
      const response = await axios.put(url, file, {
        headers: {
          "Content-Type": file.type,
        },
        onUploadProgress: (progressEvent) => {
          const percent = Math.round(
            (progressEvent.loaded * 100) / (progressEvent.total ?? 1)
          );
          setProgress(percent);
        },
      });
      if (response.status !== 200) {
        toast.error("Failed to upload file");
        return;
      }
      toast.success("File uploaded successuly");
      const objectUrl = url.split("?")[0];
      if (evidenceFileId) {
        const fileVersionResult = await createNewVersion({
          name,
          uploaderEmail: user.email,
          objectUrl,
          fileType: file.type,
          evidenceFileId,
        });
      }
      if (areaFileId) {
        const fileVersionResult = await createNewVersion({
          name,
          uploaderEmail: user.email,
          objectUrl,
          fileType: file.type,
          areaFileId,
        });
      }
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
            Upload a File
          </DialogTitle>
          <DialogDescription>{`Attach a file to ${
            indicator
              ? `${indicator?.label}: ${indicator?.description} - ${indicator.evidence}`
              : `${area?.label}: ${area?.description}`
          }`}</DialogDescription>
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
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 p-2 border">
                  <p>
                    {file.name} -{" "}
                    <span className="text-sm">{`${formatSize(
                      file.size
                    )}`}</span>
                  </p>
                  <span onClick={unattachFile}>
                    <X size={20} />
                  </span>
                </div>
                {pending && (
                  <div className="flex flex-col items-center gap-2">
                    <Progress
                      value={progress}
                      className="border animate-pulse"
                    />
                    <p className="text-sm">{`${progress}% Uploaded`}</p>
                  </div>
                )}
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
          <Button onClick={uploadFile}>
            {pending ? (
              <>
                <Loader className="animate-spin" />
                Uploading...
              </>
            ) : (
              "Upload"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UploadFileForm;
