import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EvidenceVersions } from "@/lib/generated/prisma";
import clsx from "clsx";
import { Calendar, Clock, File, Link, MoreHorizontal } from "lucide-react";

const VersionHistory = ({ versions }: { versions: EvidenceVersions[] }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock size={15} />
          Version History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="border rounded-sm">
          {versions.map((version) => (
            <div
              key={version.id}
              className="p-2 border-b flex gap-2 items-center"
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
                  {version.uploadedAt.toLocaleDateString("en-US")}
                </p>
                <p className="flex items-center gap-2">
                  <Link size={15} />
                  <a href={version.objectUrl} target="_blank">
                    Link
                  </a>
                </p>
              </div>
              <MoreHorizontal size={15} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default VersionHistory;
