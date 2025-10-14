"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { ParameterFolderDTO } from "@/lib/dto/accreditation-instrument";

export const columns: ColumnDef<ParameterFolderDTO>[] = [
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
    id: "parameterLabel",
    accessorKey: "parameter.label",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Parameter" />
    ),
    cell: ({ row }) => {
      const parameterFolder = row.original;
      return <div>{parameterFolder.parameter.label}</div>;
    },
  },
  {
    id: "parameterDescription",
    accessorKey: "parameter.description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => {
      const parameterFolder = row.original;
      return <div>{parameterFolder.parameter.description}</div>;
    },
  },
  {
    id: "noOfIndicators",
    accessorKey: "parameter",
    header: "# Indicators",
    cell: ({ row }) => {
      const parameterFolder = row.original;
      return (
        <div>
          {
            parameterFolder.indicatorFolders.flatMap((folder) => [
              ...folder.evidenceFiles,
            ]).length
          }
        </div>
      );
    },
  },
  {
    accessorKey: "completion",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Completion" />
    ),
    cell: ({ row }) => {
      const { indicatorFolders } = row.original;
      const indicators = indicatorFolders.flatMap((folder) => [
        ...folder.evidenceFiles,
      ]);
      const acceptedIndicators = indicators.filter(
        (i) => i.status === "ACCEPTED"
      );
      const percentage = (acceptedIndicators.length / indicators.length) * 100;
      return (
        <div>{`${
          Number.isInteger(percentage) ? percentage : percentage.toFixed(2)
        }%`}</div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const parameterFolder = row.original;
      return (
        <div>
          {parameterFolder.status
            ?.split("_")
            .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join(" ")}
        </div>
      );
    },
  },
];
