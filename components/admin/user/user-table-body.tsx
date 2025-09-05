"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { UsersDTO } from "@/lib/dto/user";
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
import DeleteUserForm from "./delete-user-form";

const UserTableBody = ({ users }: { users: UsersDTO[] | null }) => {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UsersDTO | undefined>(
    undefined
  );
  const [action, setAction] = useState<string | undefined>(undefined);
  const handleClick = (e: React.MouseEvent<HTMLTableSectionElement>) => {
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
      <TableBody onClick={handleClick}>
        {users?.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.firstName}</TableCell>
            <TableCell>{user.lastName}</TableCell>
            <TableCell>
              <Badge>
                {user.role[0] + user.role.slice(1).toLocaleLowerCase()}
              </Badge>
            </TableCell>
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
                      data-action="edit"
                      data-id={user.id}
                    >
                      <Pencil />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Edit User</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="destructive"
                      size="icon"
                      data-action="delete"
                      data-id={user.id}
                    >
                      <Trash />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Delete User</p>
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
            <DialogTitle>
              {action === "edit" ? "Edit user" : "Delete User"}
            </DialogTitle>
            <DialogDescription>
              {action === "edit"
                ? ""
                : "Are you sure you want to delete user? This action can't be undone!"}
            </DialogDescription>
          </DialogHeader>
          {action === "edit" ? (
            ""
          ) : (
            <DeleteUserForm selectedUser={selectedUser} />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserTableBody;
