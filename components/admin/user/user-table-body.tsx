"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { UsersDTO } from "@/lib/dto/user";
import { Pencil, Trash } from "lucide-react";

const UserTableBody = ({ users }: { users: UsersDTO[] | null }) => {
  return (
    <TableBody>
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
                  <Button variant="destructive" size="icon">
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
  );
};

export default UserTableBody;
