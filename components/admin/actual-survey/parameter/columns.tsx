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
      return (
        <div
          className="w-[150px] truncate"
          title={evidence.indicator.description}
        >
          {evidence.indicator.description}
        </div>
      );
    },
  },
  {
    header: "Adequacy",
    cell: ({ row }) => {
      const evidence = row.original;
      const rating = evidence.ratings?.find(
        (rating) => rating.type === "EXTERNAL"
      );
      return (
        <div className="text-center">
          {!rating ? "-" : rating.adequacy !== null ? rating.adequacy : "-"}
        </div>
      );
    },
  },
  {
    header: "Effectiveness",
    cell: ({ row }) => {
      const evidence = row.original;
      const rating = evidence.ratings?.find(
        (rating) => rating.type === "EXTERNAL"
      );
      return (
        <div className="text-center">
          {!rating
            ? "-"
            : rating.effectiveness !== null
            ? rating.effectiveness
            : "-"}
        </div>
      );
    },
  },
  {
    header: "AE",
    cell: ({ row }) => {
      const evidence = row.original;
      const rating = evidence.ratings?.find(
        (rating) => rating.type === "EXTERNAL"
      );
      return (
        <div className="text-center">
          {!rating
            ? "-"
            : !rating.NA && rating.adequacy && rating.effectiveness
            ? rating.finalRate
            : "-"}
        </div>
      );
    },
  },
  {
    header: "Final Rating",
    cell: ({ row }) => {
      const evidence = row.original;
      const rating = evidence.ratings?.find(
        (rating) => rating.type === "EXTERNAL"
      );
      return (
        <div className="text-center">
          {!rating ? "-" : rating.NA ? "N/A" : rating.finalRate?.toString()}
        </div>
      );
    },
  },
];
