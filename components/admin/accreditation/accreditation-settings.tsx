"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { CircleQuestionMark, Loader, Settings } from "lucide-react";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import {
  toggleFileUpload as toggleFileUploadAction,
  toggleEdit as toggleEditAction,
} from "@/lib/action/surveyVisit";
import { toast } from "sonner";

const AccreditationSettings = ({
  allowFileUploads,
  allowEdits,
  openForSelfSurvey,
  openForActualSurvey,
}: {
  allowFileUploads: boolean | undefined;
  allowEdits: boolean | undefined;
  openForSelfSurvey: boolean | undefined;
  openForActualSurvey: boolean | undefined;
}) => {
  const params = useParams();
  const [pending, startTransition] = useTransition();
  const toggleFileUpload = async () => {
    startTransition(async () => {
      const result = await toggleFileUploadAction(
        String(params.id),
        allowFileUploads!
      );
      if (result?.failure) {
        toast.error(result.failure.error);
      }
    });
  };
  const toggleEdit = async () => {
    startTransition(async () => {
      const result = await toggleEditAction(String(params.id), allowEdits!);
      if (result?.failure) {
        toast.error(result.failure.error);
      }
    });
  };
  return (
    <Card className="flex-1 bg-background">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="text-lg flex items-center gap-2">
            <Settings size={20} />
            <p>Settings</p>
          </div>
          {pending && <Loader className="animate-spin" size={15} />}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex-1 flex items-center gap-2 text-muted-foreground">
            <CircleQuestionMark size={15} />
            <p className="text-sm">Allow File Uploads</p>
          </div>
          <Switch checked={allowFileUploads} onClick={toggleFileUpload} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1 flex items-center gap-2 text-muted-foreground">
            <CircleQuestionMark size={15} />
            <p className="text-sm">Allow Edits</p>
          </div>
          <Switch checked={allowEdits} onClick={toggleEdit} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1 flex items-center gap-2 text-muted-foreground">
            <CircleQuestionMark size={15} />
            <p className="text-sm">Open for Self Survey</p>
          </div>
          <Switch checked={openForSelfSurvey} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1 flex items-center gap-2 text-muted-foreground">
            <CircleQuestionMark size={15} />
            <p className="text-sm">Open for Actual Survey</p>
          </div>
          <Switch checked={openForActualSurvey} />
        </div>
      </CardContent>
    </Card>
  );
};

export default AccreditationSettings;
