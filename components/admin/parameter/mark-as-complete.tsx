"use client";

import { Button } from "@/components/ui/button";
import { markAsComplete as markAsCompleteParameter } from "@/lib/action/parameter-folder";
import { markAsComplete as markAsCompleteArea } from "@/lib/action/area-folder";
import { markAsComplete as markAsCompleteSurveyVisit } from "@/lib/action/surveyVisit";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const MarkAsCompleteButton = ({
  parameterFolderId,
  areaFolderId,
  surveyVisitId,
}: {
  areaFolderId?: string;
  parameterFolderId?: string;
  surveyVisitId?: string;
}) => {
  const onClick = async () => {
    if (parameterFolderId) {
      const result = await markAsCompleteParameter(parameterFolderId);
      if (result.failure) toast.error(result.failure.error);
    }
    if (areaFolderId) {
      const result = await markAsCompleteArea(areaFolderId);
      if (result.failure) toast.error(result.failure.error);
    }
    if (surveyVisitId) {
      const result = await markAsCompleteSurveyVisit(surveyVisitId);
      if (result.failure) toast.error(result.failure.error);
    }
  };
  return (
    <Button onClick={onClick}>
      <CheckCircle2 />
      Mark as Complete
    </Button>
  );
};

export default MarkAsCompleteButton;
