import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Info } from "lucide-react";

const AcceptUserDialog = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Accept User</DialogTitle>
        <Alert>
          <Info />
          <AlertTitle>Email</AlertTitle>
          <AlertDescription>
            An email will be sent to the user upon confirmation
          </AlertDescription>
        </Alert>
      </DialogHeader>
    </DialogContent>
  );
};

export default AcceptUserDialog;
