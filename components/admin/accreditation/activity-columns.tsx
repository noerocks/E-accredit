"use client";

import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { Checkbox } from "@/components/ui/checkbox";
import { ActivityDTO } from "@/lib/dto/audit";
import { screamingSnakeToTitle } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { formatDistanceToNow } from "date-fns";

export const columns: ColumnDef<ActivityDTO>[] = [
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
    id: "actorEmail",
    accessorKey: "actor.email",
    header: "Actor",
    cell: ({ row }) => {
      return <div>{row.original.actor.email}</div>;
    },
  },
  {
    accessorKey: "actor.role",
    header: "Role",
    cell: ({ row }) => {
      return <div>{screamingSnakeToTitle(row.original.actor.role)}</div>;
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const activity = row.original;
      return (
        <div className="max-w-[380px] truncate" title={activity.description}>
          {activity.description}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      return (
        <div>
          {new Date(row.original.createdAt).toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "2-digit",
          })}
          -{new Date(row.original.createdAt).toLocaleTimeString("en-US")}
        </div>
      );
    },
  },
  {
    accessorKey: "action",
    header: "Type",
    cell: ({ row }) => {
      return <div>{screamingSnakeToTitle(row.original.action)}</div>;
    },
  },
];
