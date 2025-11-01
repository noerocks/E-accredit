"use client";

import { Button } from "@/components/ui/button";
import { markAsComplete as markAsCompleteParameter } from "@/lib/action/parameter-folder";
import { markAsComplete as markAsCompleteArea } from "@/lib/action/area-folder";
import { markAsComplete as markAsCompleteSurveyVisit } from "@/lib/action/surveyVisit";
import { CheckCircle2, Loader } from "lucide-react";
import { toast } from "sonner";
import { useTransition } from "react";
import { useParams } from "next/navigation";

const MarkAsCompleteButton = ({
  parameterFolderId,
  areaFolderId,
  surveyVisitId,
}: {
  areaFolderId?: string;
  parameterFolderId?: string;
  surveyVisitId?: string;
}) => {
  const [pending, startTransition] = useTransition();
  const params = useParams();
  const onClick = async () => {
    startTransition(async () => {
      if (parameterFolderId) {
        const result = await markAsCompleteParameter(
          parameterFolderId,
          String(params.id)
        );
        if (result.failure) toast.error(result.failure.error);
        if (result.success) toast.success(result.success.message);
      }
      if (areaFolderId) {
        const result = await markAsCompleteArea(
          areaFolderId,
          String(params.id)
        );
        if (result.failure) toast.error(result.failure.error);
        if (result.success) toast.success(result.success.message);
      }
      if (surveyVisitId) {
        const result = await markAsCompleteSurveyVisit(surveyVisitId);
        if (result.failure) toast.error(result.failure.error);
        if (result.success) toast.success(result.success.message);
      }
    });
  };
  return (
    <>
      {pending ? (
        <Button onClick={onClick} disabled={pending}>
          <Loader className="animate-spin" />
          Finalizing...
        </Button>
      ) : (
        <Button onClick={onClick}>
          <CheckCircle2 />
          Mark as Complete
        </Button>
      )}
    </>
  );
};

export default MarkAsCompleteButton;
