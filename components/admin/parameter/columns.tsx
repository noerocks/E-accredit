"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { EvidenceFileDTO } from "@/lib/dto/accreditation-instrument";

export const columns: ColumnDef<EvidenceFileDTO>[] = [
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
    id: "indicator",
    accessorKey: "indicator.label",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Indicator" />
    ),
    cell: ({ row }) => {
      const evidence = row.original;
      return <div>{evidence.indicator.label}</div>;
    },
  },
  {
    id: "description",
    accessorKey: "indicator.description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => {
      const evidence = row.original;
      return <div>{evidence.indicator.description}</div>;
    },
  },
  {
    id: "category",
    accessorKey: "indicator.category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    cell: ({ row }) => {
      const evidence = row.original;
      return (
        <div>
          {evidence.indicator.category
            .split("_")
            .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join(" ")}
        </div>
      );
    },
  },
  {
    id: "fileVersions",
    accessorKey: "fileVersions.length",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="# Versions" />
    ),
    cell: ({ row }) => {
      const evidence = row.original;
      return <div>{evidence.fileVersions.length}</div>;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const evidence = row.original;
      return (
        <div>{`${evidence.status
          .split("_")
          .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
          .join(" ")}`}</div>
      );
    },
  },
];
