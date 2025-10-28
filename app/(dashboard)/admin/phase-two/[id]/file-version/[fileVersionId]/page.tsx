import PDFViewer from "@/components/pdf-viewer";
import PrevButton from "@/components/prev-url-button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getFileVersionById } from "@/lib/dal/file-version";

const FileVersionPage = async ({
  params,
}: {
  params: Promise<{ fileVersionId: string }>;
}) => {
  const { fileVersionId } = await params;
  const fileVersion = await getFileVersionById(fileVersionId);
  return (
    <div className="h-full flex">
      <ScrollArea className="h-full flex-1">
        <div className="flex items-center justify-between p-1 bg-background sticky top-0 z-10">
          <PrevButton />
          <p className="text-sm text-muted-foreground pr-3">
            {fileVersion?.name}
          </p>
        </div>
        <PDFViewer fileUrl={fileVersion?.objectUrl!} />
      </ScrollArea>
    </div>
  );
};

export default FileVersionPage;
