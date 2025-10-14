import PDFViewer from "@/components/pdf-viewer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getEvidenceFileById } from "@/lib/dal/evidence";

const EvidencePage = async ({
  params,
}: {
  params: Promise<{ evidenceId: string }>;
}) => {
  const { evidenceId } = await params;
  const evidenceFile = await getEvidenceFileById(evidenceId);
  const activeFile = evidenceFile?.fileVersions.find(
    (file) => file.status === "ACTIVE"
  );
  return (
    <ScrollArea className="h-full">
      <div>
        <PDFViewer fileUrl={activeFile?.objectUrl!} />
      </div>
    </ScrollArea>
  );
};

export default EvidencePage;
