"use client";

import { Button } from "@/components/ui/button";
import { denyPhaseTwo } from "@/lib/action/surveyVisit";
import { Level } from "@/lib/generated/prisma";
import { CircleSlash, Loader } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

const DenyStatusButton = ({
  status,
  surveyVisitId,
  accreditationId,
  level,
}: {
  status: string;
  surveyVisitId: string;
  accreditationId: string;
  level: Level | undefined;
}) => {
  const [pending, startTransition] = useTransition();
  const deny = async () => {
    startTransition(async () => {
      const result = await denyPhaseTwo(surveyVisitId, accreditationId, level);
      if (result.success) toast.success(result.success.message);
      if (result.failure) toast.error(result.failure.error);
    });
  };
  return (
    <Button onClick={deny} disabled={pending} variant="destructive">
      {pending ? (
        <>
          <Loader className="animate-spin" />
          Denying...
        </>
      ) : (
        <>
          <CircleSlash />
          {`Deny ${status} status`}
        </>
      )}
    </Button>
  );
};

export default DenyStatusButton;
