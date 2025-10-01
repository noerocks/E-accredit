"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  changeActiveVersion,
  deleteVersionById,
} from "@/lib/action/evidence-version";
import { EvidenceVersions } from "@/lib/generated/prisma";
import clsx from "clsx";
import {
  Calendar,
  CheckCircle2,
  Clock,
  File,
  Link,
  MoreHorizontal,
  Trash,
  X,
} from "lucide-react";
import { toast } from "sonner";

const VersionHistory = ({ versions }: { versions: EvidenceVersions[] }) => {
  const onClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const menuItem = target.closest<HTMLDivElement>("[data-action]");
    if (!menuItem) return;
    const { id, action } = menuItem.dataset;
    if (!id || !action) return;
    switch (action) {
      case "setAsActive": {
        const result = await changeActiveVersion(id);
        if (result.failure) toast.error(result.failure.error);
        if (result.success) toast.success(result.success.message);
        break;
      }
      case "delete": {
        const result = await deleteVersionById(id);
        if (result.failure) toast.error(result.failure.error);
        if (result.success) toast.info(result.success.message);
        break;
      }
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock size={15} />
          Version History
        </CardTitle>
      </CardHeader>
      <CardContent onClick={onClick}>
        <div className="border rounded-sm p-2">
          {versions.map((version) => (
            <div
              key={version.id}
              className="p-2 border-b last:border-b-0 flex gap-2 items-center"
            >
              <div
                className={clsx("w-3 h-3 rounded-full mx-2", {
                  "bg-green-500": version.status === "ACTIVE",
                  "bg-gray-300": version.status === "ARCHIVED",
                })}
              />
              <div className="flex-1">
                <p className="flex items-center gap-2 leading-none mb-1">
                  <File size={15} />
                  {version.name}
                </p>
                <p className="flex items-center gap-2 text-gray-500">
                  <Calendar size={15} />
                  {new Date(version.uploadedAt).toLocaleString("en-US", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </p>
                <p className="flex items-center gap-2 hover:underline">
                  <Link size={15} />
                  <a href={version.objectUrl} target="_blank">
                    Link
                  </a>
                </p>
              </div>
              {version.status !== "ACTIVE" ? (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <MoreHorizontal size={15} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="bottom" align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      data-id={version.id}
                      data-action={"setAsActive"}
                    >
                      <CheckCircle2 /> Set as active
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      data-id={version.id}
                      data-action={"delete"}
                    >
                      <Trash className="text-red-400" />
                      <span className="text-red-400">Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <p className="text-sm py-1 px-3 border border-green-400 text-green-400 rounded-full flex items-center gap-2">
                  <CheckCircle2 size={15} />
                  {`${
                    version.status[0].toLocaleUpperCase() +
                    version.status.slice(1).toLowerCase()
                  }`}
                </p>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default VersionHistory;
