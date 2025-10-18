"use client";

import { Button } from "@/components/ui/button";
import { endSelfSurvey } from "@/lib/action/surveyVisit";
import { Check, Loader } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

const EndSurveyButton = ({ surveyVisitId }: { surveyVisitId: string }) => {
  const [pending, startTransition] = useTransition();
  const endSurvey = async () => {
    startTransition(async () => {
      const result = await endSelfSurvey(surveyVisitId);
      if (result?.failure) toast.error(result.failure.error);
    });
  };
  return (
    <Button onClick={endSurvey}>
      {pending ? (
        <>
          <Loader className="animate-spin" />
          End Survey
        </>
      ) : (
        <>
          <Check />
          End Survey
        </>
      )}
    </Button>
  );
};

export default EndSurveyButton;
