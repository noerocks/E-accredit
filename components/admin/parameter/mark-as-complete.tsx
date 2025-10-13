"use client";

import { Button } from "@/components/ui/button";
import { markAsComplete } from "@/lib/action/parameter-folder";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const MarkAsCompleteButton = ({
  parameterFolderId,
}: {
  parameterFolderId: string | undefined;
}) => {
  const onClick = async () => {
    const result = await markAsComplete(parameterFolderId);
    if (result.failure) toast.error(result.failure.error);
  };
  return (
    <Button onClick={onClick}>
      <CheckCircle2 />
      Mark as Complete
    </Button>
  );
};

export default MarkAsCompleteButton;
