import AcceptOrReject from "@/components/admin/evidence-file/acceptOrReject";
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
import { getFilteredComments } from "@/lib/dal/comment";
import { getEvidenceFileById } from "@/lib/dal/evidence";
import { Category, CommentType, FileStatus } from "@/lib/generated/prisma";
import clsx from "clsx";
import { CheckCircle, CircleDot, Tag } from "lucide-react";

const EvidencePage = async ({
  params,
}: {
  params: Promise<{ evidenceId: string }>;
}) => {
  const { evidenceId } = await params;
  const evidence = await getEvidenceFileById(evidenceId);
  const indicator = evidence?.indicator;
  const parameter = evidence?.indicatorFolder.parameterFolder.parameter;
  const parameterFolderId = evidence?.indicatorFolder.parameterFolderId;
  const areaFolderId = evidence?.indicatorFolder.parameterFolder.areaFolderId;
  const formattedCategory = {
    [Category.SYSTEM]: "System",
    [Category.IMPLEMENTATION]: "Implementation",
    [Category.OUTCOME]: "Outcome/s",
  };
  const comments = await getFilteredComments({
    evidenceFileId: evidence?.id,
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
  const session = await verifySession();
  const user = session.user;
  const isAdmin = user.role === "ADMIN";
  const isMember =
    evidence?.indicatorFolder.parameterFolder.areaFolder.taskForce?.taskForceMember.some(
      (member) => member.programPersonnel.userId === user.id
    );
  const isChairperson =
    evidence?.indicatorFolder.parameterFolder.areaFolder.taskForce?.chairPerson
      ?.userId === user.id;
  return (
    <ScrollArea className="h-full">
      <div className="max-w-3/4 mx-auto my-10 flex flex-col gap-5">
        <p className="text-2xl flex items-center gap-2">
          <CheckCircle />
          Indicator
        </p>
        <Card>
          <CardHeader>
            <CardTitle>
              <p className="text-3xl">
                {`${indicator?.label}: ${indicator?.description}`}
              </p>
            </CardTitle>
            <CardDescription className="text-lg">
              {`${parameter?.label}: ${parameter?.description}`}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <div className="flex items-center gap-2">
              <p
                className={clsx(
                  "py-2 px-3 border-2 rounded-md flex items-center gap-2",
                  {
                    "bg-yellow-400/5 text-yellow-600 border-yellow-400":
                      evidence?.status === FileStatus.FOR_REVIEW,
                    "bg-green-400/5 text-green-600 border-green-400":
                      evidence?.status === FileStatus.ACCEPTED,
                    "bg-red-400/5 text-red-600 border-red-400":
                      evidence?.status === FileStatus.REJECTED,
                  }
                )}
              >
                <CircleDot size={15} />
                {formatStatus(evidence?.status!)}
              </p>
              <p className="py-2 px-3 border-2 rounded-md flex items-center gap-2">
                <Tag size={15} />
                {formattedCategory[indicator?.category!]}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Comments
                user={user}
                type={CommentType.TASKFORCE}
                evidenceFileId={evidence?.id}
                comments={comments}
              />
              {(isMember || isAdmin) && (
                <UploadFileForm
                  indicator={indicator}
                  evidenceFileId={evidenceId}
                  user={user}
                  parameterFolderId={parameterFolderId}
                  areaFolderId={areaFolderId}
                />
              )}
              {(isChairperson || isAdmin) &&
                evidence?.status === "FOR_REVIEW" && (
                  <AcceptOrReject evidenceId={evidenceId} />
                )}
            </div>
          </CardFooter>
        </Card>
        <FileVersions
          fileId={evidenceId}
          versions={evidence?.fileVersions}
          fileType="Evidence"
          parameterFolderId={parameterFolderId}
          areaFolderId={areaFolderId}
          isMember={isMember}
          isAdmin={isAdmin}
        />
      </div>
    </ScrollArea>
  );
};

export default EvidencePage;
