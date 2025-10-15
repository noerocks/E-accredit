import AccreditorSidebar from "@/components/admin/self-survey/accreditor-sidebar";
import PDFViewer from "@/components/pdf-viewer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getAreaFileById } from "@/lib/dal/area-file";

const AreaFilePage = async ({
  params,
}: {
  params: Promise<{ areaFileId: string }>;
}) => {
  const { areaFileId } = await params;
  const areaFile = await getAreaFileById(areaFileId);
  const activeFile = areaFile?.fileVersions.find(
    (file) => file.status === "ACTIVE"
  );
  return (
    <div className="h-full flex">
      <ScrollArea className="h-full flex-1">
        <PDFViewer fileUrl={activeFile?.objectUrl!} />
      </ScrollArea>
    </div>
  );
};

export default AreaFilePage;
