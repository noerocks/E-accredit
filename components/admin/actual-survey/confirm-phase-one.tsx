"use client";

import { Button } from "@/components/ui/button";
import { Check, Loader } from "lucide-react";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";
import { grantPhaseOne as grantPhaseOneAction } from "@/lib/action/surveyVisit";
import { Level } from "@/lib/generated/prisma";

const ConfirmPhaseOne = ({
  accreditationId,
  level,
}: {
  accreditationId: string | undefined;
  level: Level | undefined;
}) => {
  const [pending, startTransition] = useTransition();
  const params = useParams();
  const grantPhaseOne = async () => {
    startTransition(async () => {
      const surveyVisitId = String(params.id);
      const result = await grantPhaseOneAction(
        surveyVisitId,
        accreditationId,
        level
      );
      if (result.success) toast.success(result.success.message);
      if (result.failure) toast.error(result.failure.error);
    });
  };
  return (
    <Button onClick={grantPhaseOne} disabled={pending}>
      {pending ? (
        <>
          <Loader className="animate-spin" />
          Confirming...
        </>
      ) : (
        <>
          <Check />
          Confirm Phase 1 Result
        </>
      )}
    </Button>
  );
};

export default ConfirmPhaseOne;
