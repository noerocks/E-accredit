import UploadFileForm from "@/components/admin/evidence-file/upload-file-form";
import VersionHistory from "@/components/admin/evidence-file/version-history";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getAreaById } from "@/lib/dal/area";
import { getAreaFileById } from "@/lib/dal/area-file";
import { AreaFileType } from "@/lib/generated/prisma";
import { Layers } from "lucide-react";

const AreaFilePage = async ({
  params,
}: {
  params: Promise<{ areaFileId: string }>;
}) => {
  const { areaFileId } = await params;
  const areaFile = await getAreaFileById(areaFileId);
  const area = areaFile?.phaseOneAreaFolder?.area;
  const areaFileType = {
    [AreaFileType.PPP]: "Program Performance Profile",
    [AreaFileType.COMPLIANCE_REPORT]: "Compliance Report",
    [AreaFileType.NARRATIVE_PROFILE]: "Narrative Profile",
  };
  return (
    <ScrollArea className="h-full">
      <div className="max-w-3/4 mx-auto my-10 flex flex-col gap-5">
        <p className="text-2xl flex items-center gap-2">
          <Layers />
          Area
        </p>
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">
              {areaFileType[areaFile?.type!]}
            </CardTitle>
            <CardDescription className="text-lg">{`${area?.label}: ${area?.description}`}</CardDescription>
          </CardHeader>
          <CardFooter>
            <UploadFileForm area={area} areaFileId={areaFile?.id} />
          </CardFooter>
        </Card>
        {areaFile?.fileVersions && (
          <VersionHistory
            fileId={areaFileId}
            versions={areaFile?.fileVersions}
            fileType="AreaFile"
          />
        )}
      </div>
    </ScrollArea>
  );
};

export default AreaFilePage;
