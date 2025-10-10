"use client";

import { Button } from "@/components/ui/button";
import { acceptOrReject } from "@/lib/action/evidence";
import { useTransition } from "react";

const AcceptOrReject = ({ evidenceId }: { evidenceId: string }) => {
  const [pending, startTransition] = useTransition();
  const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    startTransition(async () => {
      const button = e.target as HTMLElement;
      const { action } = button.dataset;
      if (!action) return;
      const result = await acceptOrReject(evidenceId, action);
    });
  };
  return (
    <div className="flex items-center gap-2">
      <Button data-action="accept" onClick={onClick}>
        Accept
      </Button>
      <Button variant="outline" data-action="reject" onClick={onClick}>
        Reject
      </Button>
    </div>
  );
};

export default AcceptOrReject;
