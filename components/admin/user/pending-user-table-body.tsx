"use client";

import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { UsersDTO } from "@/lib/dto/user";
import { UserPlus, UserX } from "lucide-react";
import { useState } from "react";
import RejectUserDialog from "./reject-user-dialog";
import AcceptUserDialog from "./accept-user-dialog";
import { ProgramsNamesAndIdDTO } from "@/lib/dto/programs";

const PendingUserTableBody = ({
  users,
  programs,
}: {
  users: UsersDTO[] | null;
  programs: ProgramsNamesAndIdDTO[];
}) => {
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
                      className="hover:bg-blue-500 bg-blue-500 dark:bg-blue-600 text-white"
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
        {action === "accept" ? (
          <AcceptUserDialog selectedUser={selectedUser} programs={programs} />
        ) : (
          <RejectUserDialog selectedUser={selectedUser} />
        )}
      </Dialog>
    </>
  );
};

export default PendingUserTableBody;
