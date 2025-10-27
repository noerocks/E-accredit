"use client";

import { Button } from "@/components/ui/button";
import { acceptOrReject } from "@/lib/action/evidence";
import { Loader } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

const AcceptOrReject = ({ evidenceId }: { evidenceId: string }) => {
  const [pending, startTransition] = useTransition();
  const [currentAction, setCurrentAction] = useState<string | null>(null);

  const onClick = async (action: string) => {
    setCurrentAction(action);
    startTransition(async () => {
      const result = await acceptOrReject(evidenceId, action);
      if (result.failure) toast.error(result.failure.error);
      if (result.success) toast.success(result.success.message);
      setCurrentAction(null);
    });
  };

  return (
    <div className="flex items-center gap-2">
      {currentAction === "accept" && pending ? (
        <Button disabled>
          <Loader className="animate-spin mr-2 h-4 w-4" />
          Accepting...
        </Button>
      ) : (
        <Button
          onClick={() => onClick("accept")}
          disabled={pending && currentAction !== "accept"}
        >
          Accept
        </Button>
      )}

      {currentAction === "reject" && pending ? (
        <Button disabled>
          <Loader className="animate-spin mr-2 h-4 w-4" />
          Rejecting...
        </Button>
      ) : (
        <Button
          onClick={() => onClick("reject")}
          disabled={pending && currentAction !== "reject"}
        >
          Reject
        </Button>
      )}
    </div>
  );
};

export default AcceptOrReject;
