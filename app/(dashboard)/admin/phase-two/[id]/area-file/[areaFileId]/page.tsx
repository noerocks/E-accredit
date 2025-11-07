import Banner from "@/components/admin/accreditation/banner";
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
import {
  getSurveyVisitById,
  getSurveyVisitStructureById,
} from "@/lib/dal/survey-visit";
import { AreaFileType, CommentType, FileStatus } from "@/lib/generated/prisma";
import { screamingSnakeToTitle } from "@/lib/utils";
import clsx from "clsx";
import { CircleDot, Layers } from "lucide-react";

const PhaseTwoAreaFile = async ({
  params,
}: {
  params: Promise<{ id: string; areaFileId: string }>;
}) => {
  const { id, areaFileId } = await params;
  const surveyVisitStructure = await getSurveyVisitStructureById(id);
  const session = await verifySession();
  const user = session.user;
  const isAdmin = user.role === "ADMIN";
  const areaFile = await getAreaFileById(areaFileId);
  const area = areaFile?.phaseTwoAreaFolder?.area;
  const areaFileType = {
    [AreaFileType.PPP]: "Program Performance Profile",
    [AreaFileType.COMPLIANCE_REPORT]: "Compliance Report",
    [AreaFileType.NARRATIVE_PROFILE]: "Narrative Profile",
  };
  const surveyVisit = await getSurveyVisitById(id);
  const comments = await getFilteredComments({
    areaFileId: areaFile?.id,
    type: CommentType.TASKFORCE,
  });
  const isChairPerson =
    areaFile?.phaseTwoAreaFolder?.taskForce?.chairPerson?.userId === user.id;
  return (
    <ScrollArea className="h-full">
      <Banner surveyVisitId={id} />
      <div className="max-w-5/6 mx-auto my-10 flex flex-col gap-5">
        <p className="text-2xl flex items-center gap-2">
          <Layers />
          Area
        </p>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              {areaFileType[areaFile?.type!]}
            </CardTitle>
            <CardDescription className="text-md">{`Criteria: ${area?.description}`}</CardDescription>
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
              {screamingSnakeToTitle(areaFile?.status!)}
            </p>
            <div className="flex items-center gap-2">
              <Comments
                user={user}
                type={CommentType.TASKFORCE}
                areaFileId={areaFile?.id}
                comments={comments}
              />
              {(isAdmin || isChairPerson) && (
                <UploadFileForm
                  area={area}
                  areaFileId={areaFile?.id}
                  user={user}
                  allowFileUploads={surveyVisit?.allowFileUploads}
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
          isChairPerson={isChairPerson}
        />
      </div>
    </ScrollArea>
  );
};

export default PhaseTwoAreaFile;
