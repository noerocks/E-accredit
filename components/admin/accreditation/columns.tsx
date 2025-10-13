"use client";

import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { Checkbox } from "@/components/ui/checkbox";
import { AreaFolderDTO } from "@/lib/dto/accreditation-instrument";
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
    accessorKey: "chairPerson",
    header: "Chairperson",
    cell: ({ row }) => {
      const areaFolder = row.original;
      const chairPerson = areaFolder.taskForce?.chairPerson?.user;
      const name = chairPerson
        ? `${chairPerson?.firstName} ${chairPerson?.lastName}`
        : "-";
      return <div>{`${name}`}</div>;
    },
  },
  {
    id: "#members",
    accessorKey: "parameterFolders.taskForce.taskForceMember.length",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="# Members" />
    ),
    cell: ({ row }) => {
      const areaFolder = row.original;
      return <div>{areaFolder.taskForce.taskForceMember.length}</div>;
    },
  },
  {
    id: "#parameters",
    accessorKey: "parameterFolders.length",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="# Parameters" />
    ),
    cell: ({ row }) => {
      const areaFolder = row.original;
      return <div>{areaFolder.parameterFolders.length}</div>;
    },
  },
  {
    id: "completion",
    accessorKey: "parameterFolders.length",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Completion %" />
    ),
    cell: ({ row }) => {
      const areaFolder = row.original;
      const evidenceFiles = areaFolder.parameterFolders.flatMap((parameter) =>
        parameter.indicatorFolders.flatMap(
          (indicator) => indicator.evidenceFiles
        )
      );
      const areaFiles = areaFolder.areaFiles;
      const evidenceAndAreaFiles = [...evidenceFiles, ...areaFiles];
      const acceptedAndSubmittedFiles = evidenceAndAreaFiles.filter(
        (file) => file.status === "ACCEPTED" || file.status === "SUBMITTED"
      );
      const percentage =
        (acceptedAndSubmittedFiles.length / evidenceAndAreaFiles.length) * 100;
      return <div>{`${percentage}%`}</div>;
    },
  },
  {
    id: "status",
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const areaFolder = row.original;
      return (
        <div>
          {areaFolder.status
            ?.split("_")
            .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join(" ")}
        </div>
      );
    },
  },
];
