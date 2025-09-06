"use client";

import Spinner from "@/components/spinner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { rejectUser } from "@/lib/action/user";
import { UsersDTO } from "@/lib/dto/user";
import { DialogClose } from "@radix-ui/react-dialog";
import { UserPlus, UserX } from "lucide-react";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

const PendingUserTableBody = ({ users }: { users: UsersDTO[] | null }) => {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UsersDTO | undefined>(
    undefined
  );
  const [action, setAction] = useState<string | undefined>(undefined);
  const onClick = (e: React.MouseEvent<HTMLTableSectionElement>) => {
    const target = e.target as HTMLElement;
    const button = target.closest<HTMLButtonElement>("[data-action]");
    if (!button) return;
    const { id, action } = button.dataset;
    const user = users?.find((user) => user.id === id);
    setOpen(true);
    setSelectedUser(user);
    setAction(action);
  };
  console.log("test");
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
    <>
      <TableBody onClick={onClick}>
        {users?.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.firstName}</TableCell>
            <TableCell>{user.lastName}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phoneNumber}</TableCell>
            <TableCell>
              {new Date(user.registrationDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}{" "}
              {new Date(user.registrationDate).toLocaleTimeString("en-US")}
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      className="bg-blue-500 dark:bg-blue-600 text-white"
                      size="icon"
                      data-action="accept"
                      data-id={user.id}
                    >
                      <UserPlus />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Accept User</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="destructive"
                      size="icon"
                      data-action="reject"
                      data-id={user.id}
                    >
                      <UserX />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Reject User</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reject User</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            Are you sure you want to reject{" "}
            <span className="dark:text-white text-black">{`${selectedUser?.firstName} ${selectedUser?.lastName}`}</span>
            ? This action can't be undone!
          </p>
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
      </Dialog>
    </>
  );
};

export default PendingUserTableBody;
