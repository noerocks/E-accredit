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
    <ScrollArea className="h-full">
      <div>
        <PDFViewer fileUrl={activeFile?.objectUrl!} />
      </div>
    </ScrollArea>
  );
};

export default AreaFilePage;
