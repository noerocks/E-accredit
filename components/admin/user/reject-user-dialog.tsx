import Spinner from "@/components/spinner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { rejectUser } from "@/lib/action/user";
import { UsersDTO } from "@/lib/dto/user";
import { TriangleAlert } from "lucide-react";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

const RejectUserDialog = ({
  selectedUser,
}: {
  selectedUser: UsersDTO | undefined;
}) => {
  const [state, formAction, isPending] = useActionState(
    rejectUser.bind(null, selectedUser?.id),
    undefined
  );
  useEffect(() => {
    switch (state?.status) {
      case "success":
        toast.success(state?.message);
        break;
      case "error":
        toast.error(state?.message);
        break;
    }
  }, [state]);
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-center text-2xl">Reject User</DialogTitle>
        <DialogDescription>
          Are you sure you want to reject{" "}
          <span className="dark:text-white text-black">{`${selectedUser?.firstName} ${selectedUser?.lastName}`}</span>
          ?
        </DialogDescription>
        <Alert
          variant="destructive"
          className="bg-destructive/5 border-destructive"
        >
          <TriangleAlert />
          <AlertTitle>Warning!</AlertTitle>
          <AlertDescription>This action can't be undone</AlertDescription>
        </Alert>
      </DialogHeader>
      <form action={formAction}>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="destructive">
            {isPending ? <Spinner message="Rejecting..." /> : "Reject"}{" "}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default RejectUserDialog;
