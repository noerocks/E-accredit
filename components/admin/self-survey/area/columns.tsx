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
      return (
        <div
          className="w-[150px] truncate"
          title={parameterFolder.parameter.description}
        >
          {parameterFolder.parameter.description}
        </div>
      );
    },
  },
];
