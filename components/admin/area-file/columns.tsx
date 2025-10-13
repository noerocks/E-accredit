"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { AreaFileDTO } from "@/lib/dto/accreditation-instrument";
import { AreaFileType } from "@/lib/generated/prisma";
import { formatDistanceToNow } from "date-fns";

const areaFileNames = {
  [AreaFileType.COMPLIANCE_REPORT]: "Compliance Report",
  [AreaFileType.PPP]: "Program Performance Profile",
  [AreaFileType.NARRATIVE_PROFILE]: "Narrative Profile",
};
export const columns: ColumnDef<AreaFileDTO>[] = [
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
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="File Name" />
    ),
    cell: ({ row }) => {
      const areaFile = row.original;
      return <div>{areaFileNames[areaFile.type]}</div>;
    },
  },
  {
    id: "fileVersions",
    accessorKey: "fileVersions.length",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="# Versions" />
    ),
    cell: ({ row }) => {
      const areaFile = row.original;
      return <div>{areaFile.fileVersions.length}</div>;
    },
  },
  {
    accessorKey: "latestUpload",
    header: "Latest Upload",
    cell: ({ row }) => {
      const areaFile = row.original;
      const fileVersions = areaFile.fileVersions ?? [];

      const latestUploadDate =
        fileVersions.length > 0
          ? formatDistanceToNow(
              new Date(
                Math.max(
                  ...fileVersions.map((v) => new Date(v.uploadedAt).getTime())
                )
              ),
              {
                addSuffix: true,
              }
            )
          : "-";

      return <div>{latestUploadDate}</div>;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const areaFile = row.original;
      return (
        <div>
          {areaFile.status
            ?.split("_")
            .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join(" ")}
        </div>
      );
    },
  },
];
