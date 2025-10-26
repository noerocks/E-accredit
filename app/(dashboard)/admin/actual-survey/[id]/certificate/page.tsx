import PDFViewer from "@/components/pdf-viewer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getCertificateFileBySurveyVisitId } from "@/lib/dal/file-version";

const CertificatePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const certificate = await getCertificateFileBySurveyVisitId(id);
  return (
    <div className="h-full flex">
      <ScrollArea className="h-full flex-1">
        <PDFViewer fileUrl={certificate?.objectUrl!} />
      </ScrollArea>
    </div>
  );
};

export default CertificatePage;
