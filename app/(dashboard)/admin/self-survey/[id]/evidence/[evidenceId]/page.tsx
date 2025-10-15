import AccreditorSidebar from "@/components/admin/self-survey/accreditor-sidebar";
import PDFViewer from "@/components/pdf-viewer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { verifySession } from "@/lib/action/session";
import { getEvidenceFileById } from "@/lib/dal/evidence";
import { getInternalRatingByEvidenceFileId } from "@/lib/dal/rating";

const EvidencePage = async ({
  params,
}: {
  params: Promise<{ evidenceId: string }>;
}) => {
  const { evidenceId } = await params;
  const evidenceFile = await getEvidenceFileById(evidenceId);
  const rating = await getInternalRatingByEvidenceFileId(evidenceId);
  console.log(rating);
  const activeFile = evidenceFile?.fileVersions.find(
    (file) => file.status === "ACTIVE"
  );
  const comments = evidenceFile?.comments.filter(
    (comment) => comment.type === "SELF_SURVEY"
  );
  const session = await verifySession();
  return (
    <div className="h-full flex">
      <ScrollArea className="h-full flex-1">
        <PDFViewer fileUrl={activeFile?.objectUrl!} />
      </ScrollArea>
      <AccreditorSidebar
        comments={comments || []}
        user={session.user}
        rating={rating}
      />
    </div>
  );
};

export default EvidencePage;
