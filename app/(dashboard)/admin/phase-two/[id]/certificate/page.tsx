import PDFViewer from "@/components/pdf-viewer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getCertificateFileBySurveyVisitId } from "@/lib/dal/file-version";
import { getSurveyVisitStructureById } from "@/lib/dal/survey-visit";

const CertificatePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const surveyVisitStructure = await getSurveyVisitStructureById(id);
  const level = surveyVisitStructure?.level;
  let surveyVisitId = surveyVisitStructure?.id;
  if (level?.rank === 4 || level?.rank === 2) {
    surveyVisitId = surveyVisitStructure?.accreditation.surveyVisits.find(
      (survey) =>
        survey.level.label === level.label &&
        survey.level.phase === "PHASE_2" &&
        survey.surveyResultStatus === "GRANTED"
    )?.id;
    console.log(surveyVisitId);
  }
  const certificate = await getCertificateFileBySurveyVisitId(surveyVisitId!);
  return (
    <div className="h-full flex">
      <ScrollArea className="h-full flex-1">
        <PDFViewer fileUrl={certificate?.objectUrl!} />
      </ScrollArea>
    </div>
  );
};

export default CertificatePage;
