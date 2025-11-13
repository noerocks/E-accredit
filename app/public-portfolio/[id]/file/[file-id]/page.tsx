import PDFViewer from "@/components/pdf-viewer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getAreaFileById } from "@/lib/dal/area-file";
import { getEvidenceFileById } from "@/lib/dal/evidence";

const FilePage = async ({
  params,
}: {
  params: Promise<{ ["file-id"]: string }>;
}) => {
  const query = await params;
  const evidenceFile = await getEvidenceFileById(query["file-id"]);
  const areaFile = await getAreaFileById(query["file-id"]);
  const file = Object.keys(evidenceFile).length > 0 ? evidenceFile : areaFile;
  const activeVersion = file?.fileVersions?.find(
    (version) => version.status === "ACTIVE"
  );
  return (
    <div className="h-screen">
      <ScrollArea className="h-full">
        <PDFViewer fileUrl={activeVersion?.objectUrl!} />
      </ScrollArea>
    </div>
  );
};

export default FilePage;
