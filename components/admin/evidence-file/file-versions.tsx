import { Card, CardContent } from "@/components/ui/card";
import { FileVersion } from "@/lib/generated/prisma";
import { DataTable } from "./data-table";
import { columns } from "./columns";

const FileVersions = ({
  fileId,
  versions,
  fileType,
  parameterFolderId,
  areaFolderId,
  isMember,
  isAdmin,
  isChairPerson,
}: {
  fileId: string;
  versions: FileVersion[] | undefined;
  fileType: "Evidence" | "AreaFile";
  parameterFolderId?: string | undefined;
  areaFolderId: string | undefined;
  isAdmin: boolean | undefined;
  isMember?: boolean | undefined;
  isChairPerson?: boolean | undefined;
}) => {
  return (
    <Card className="bg-background">
      <CardContent>
        <DataTable
          columns={columns}
          data={versions || []}
          fileId={fileId}
          fileType={fileType}
          parameterFolderId={parameterFolderId}
          areaFolderId={areaFolderId}
        />
      </CardContent>
    </Card>
  );
};

export default FileVersions;
