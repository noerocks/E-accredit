"use client";

import { Button } from "@/components/ui/button";
import { endActualSurvey, endSelfSurvey } from "@/lib/action/surveyVisit";
import { Check, Loader } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

const EndSurveyButton = ({ surveyVisitId }: { surveyVisitId: string }) => {
  const pathName = usePathname();
  const root = pathName
    .split("/")
    .filter((segment) => segment)
    .at(1);
  const [pending, startTransition] = useTransition();
  const endSurvey = async () => {
    startTransition(async () => {
      switch (root) {
        case "self-survey": {
          const result = await endSelfSurvey(surveyVisitId);
          if (result?.failure) toast.error(result.failure.error);
          break;
        }
        case "actual-survey": {
          const result = await endActualSurvey(surveyVisitId);
          if (result?.failure) toast.error(result.failure.error);
          break;
        }
      }
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
