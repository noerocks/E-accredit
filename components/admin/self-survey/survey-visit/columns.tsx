"use client";

import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { Checkbox } from "@/components/ui/checkbox";
import { AreaFolderDTO } from "@/lib/dto/accreditation-instrument";
import { SurveyTeamType } from "@/lib/generated/prisma";
import { calculateAreaMean } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<AreaFolderDTO>[] = [
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
    id: "areaLabel",
    accessorKey: "area.label",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Area" />
    ),
  },
  {
    id: "areaDescription",
    accessorKey: "area.description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => {
      const area = row.original.area;
      return (
        <div className="max-w-[150px] truncate" title={area.description}>
          {area.description}
        </div>
      );
    },
  },
  {
    header: "Mean",
    cell: ({ row }) => {
      const areaFolder = row.original;
      const mean = calculateAreaMean(areaFolder, SurveyTeamType.INTERNAL);
      return <div>{mean ? mean.toFixed(2) : "-"}</div>;
    },
  },
  {
    header: "Weight",
    cell: ({ row }) => {
      const areaFolder = row.original;
      return <div>{areaFolder.area.weight}</div>;
    },
  },
  {
    header: "Weighted Mean",
    cell: ({ row }) => {
      const areaFolder = row.original;
      const mean = calculateAreaMean(areaFolder, SurveyTeamType.INTERNAL);
      const weightedMean = mean && mean * areaFolder.area.weight;
      return <div>{weightedMean ? weightedMean.toFixed(2) : "-"}</div>;
    },
  },
];
