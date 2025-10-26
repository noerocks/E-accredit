import AccreditorSidebar from "@/components/admin/self-survey/accreditor-sidebar";
import PDFViewer from "@/components/pdf-viewer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { verifySession } from "@/lib/action/session";
import { getEvidenceFileById } from "@/lib/dal/evidence";
import { getRatingByEvidenceFileId } from "@/lib/dal/rating";
import { getSurveyVisitById } from "@/lib/dal/survey-visit";
import { SurveyTeamType } from "@/lib/generated/prisma";
import { CheckCircle } from "lucide-react";

const EvidencePage = async ({
  params,
}: {
  params: Promise<{ id: string; evidenceId: string }>;
}) => {
  const { id, evidenceId } = await params;
  const evidenceFile = await getEvidenceFileById(evidenceId);
  const indicator = evidenceFile?.indicator;
  const rating = await getRatingByEvidenceFileId(
    evidenceId,
    SurveyTeamType.INTERNAL
  );
  const activeFile = evidenceFile?.fileVersions?.find(
    (file) => file.status === "ACTIVE"
  );
  const comments = evidenceFile?.comments?.filter(
    (comment) => comment.type === "SELF_SURVEY"
  );
  const areaChair =
    evidenceFile.indicatorFolder?.parameterFolder.areaFolder.areaChair.find(
      (area) => area.surveyTeam.type === "INTERNAL"
    );
  const { user } = await verifySession();
  const authorized = user.id === areaChair?.user.id || user.role === "ADMIN";
  const surveyVisit = await getSurveyVisitById(id);
  const surveyStatus = surveyVisit?.selfSurveyStatus;
  return (
    <div className="h-full flex">
      <ScrollArea className="h-full flex-1">
        <p className="h-[48px] text-sm sticky top-0 z-10 bg-background shadow-md flex items-center pl-5 gap-2">
          <CheckCircle size={15} />
          {`${indicator?.label}: ${indicator?.description}`}
        </p>
        <PDFViewer fileUrl={activeFile?.objectUrl!} />
      </ScrollArea>
      <AccreditorSidebar
        comments={comments || []}
        user={user}
        rating={rating}
        authorized={authorized}
        surveyStatus={surveyStatus!}
      />
    </div>
  );
};

export default EvidencePage;
