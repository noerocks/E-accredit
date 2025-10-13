import Comments from "@/components/admin/evidence-file/comments";
import FileVersions from "@/components/admin/evidence-file/file-versions";
import UploadFileForm from "@/components/admin/evidence-file/upload-file-form";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { verifySession } from "@/lib/action/session";
import { getAreaFileById } from "@/lib/dal/area-file";
import { getFilteredComments } from "@/lib/dal/comment";
import { AreaFileType, CommentType, FileStatus } from "@/lib/generated/prisma";
import clsx from "clsx";
import { CircleDot, Layers } from "lucide-react";

const AreaFilePage = async ({
  params,
}: {
  params: Promise<{ areaFileId: string }>;
}) => {
  const { areaFileId } = await params;
  const areaFile = await getAreaFileById(areaFileId);
  const areaFolderId =
    areaFile?.phaseOneAreaFolderId ||
    areaFile?.phaseTwoAreaFolderId ||
    undefined;
  const session = await verifySession();
  const user = session.user;
  const isChairperson =
    areaFile?.phaseOneAreaFolder?.taskForce?.chairPerson?.userId === user.id;
  const isAdmin = user.role === "ADMIN";
  const area =
    areaFile?.phaseOneAreaFolder?.area || areaFile?.phaseTwoAreaFolder?.area;
  const areaFileType = {
    [AreaFileType.PPP]: "Program Performance Profile",
    [AreaFileType.COMPLIANCE_REPORT]: "Compliance Report",
    [AreaFileType.NARRATIVE_PROFILE]: "Narrative Profile",
  };
  const comments = await getFilteredComments({
    areaFileId: areaFile?.id,
    type: CommentType.TASKFORCE,
  });
  const formatStatus = (status: FileStatus) => {
    return status
      .split("_")
      .map(
        (word) =>
          word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
      )
      .join(" ");
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
          <CardFooter className="flex items-center justify-between">
            <p
              className={clsx(
                "py-2 px-3 border-2 rounded-md flex items-center gap-2",
                {
                  "bg-green-400/5 text-green-600 border-green-400":
                    areaFile?.status === FileStatus.SUBMITTED,
                }
              )}
            >
              <CircleDot size={15} />
              {formatStatus(areaFile?.status!)}
            </p>
            <div className="flex items-center gap-2">
              <Comments
                user={user}
                type={CommentType.TASKFORCE}
                areaFileId={areaFile?.id}
                comments={comments}
              />
              {(isAdmin || isChairperson) && (
                <UploadFileForm
                  area={area}
                  areaFileId={areaFile?.id}
                  user={user}
                />
              )}
            </div>
          </CardFooter>
        </Card>
        <FileVersions
          fileId={areaFileId}
          versions={areaFile?.fileVersions}
          fileType="AreaFile"
          isAdmin={isAdmin}
          isChairPerson={isChairperson}
        />
      </div>
    </ScrollArea>
  );
};

export default AreaFilePage;
