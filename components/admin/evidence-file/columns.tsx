"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  Archive,
  CheckCircle2,
  Copy,
  MoreHorizontal,
  Trash,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { FileVersion } from "@/lib/generated/prisma";
import clsx from "clsx";

export const columns: ColumnDef<FileVersion>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="File name" />
    ),
  },
  {
    accessorKey: "uploadedAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Uploaded at" />
    ),
    cell: ({ row }) => {
      const formattedDate = `${new Date(
        row.original.uploadedAt
      ).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })} - ${new Date(row.original.uploadedAt).toLocaleTimeString("en-US")}`;
      return <div>{formattedDate}</div>;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.original.status;
      const formattedStatus = status
        ?.split("_")
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
      return (
        <div className="text-center">
          <p
            className={clsx("text-sm", {
              "text-red-500": status === "REJECTED",
              "text-green-500": status === "ACTIVE",
            })}
          >
            {status === "ACTIVE" ? (
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} />
                Active
              </span>
            ) : status === "REJECTED" ? (
              <span className="flex items-center gap-2">
                <XCircle size={15} />
                Rejected
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Archive size={15} />
                Archived
              </span>
            )}
          </p>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const version = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              data-action="copyURL"
              data-url={version.objectUrl}
            >
              <Copy />
              Copy URL
            </DropdownMenuItem>
            <DropdownMenuItem
              data-action="setAsActive"
              data-id={version.id}
              disabled={
                version.status === "ACTIVE" || version.status === "REJECTED"
              }
            >
              <CheckCircle2 />
              Set as Active
            </DropdownMenuItem>
            <DropdownMenuItem
              data-action="delete"
              data-id={version.id}
              disabled={version.status === "ACTIVE"}
            >
              <Trash />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
