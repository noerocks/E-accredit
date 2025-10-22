import SelfSurveyReportPDF from "@/components/admin/self-survey/self-survey-report-pdf";
import PDFViewer from "@/components/pdf-viewer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getInstrumentStructureById } from "@/lib/dal/instrument";
import { getSurveyVisitStructureById } from "@/lib/dal/survey-visit";
import { AreaFolderDTO } from "@/lib/dto/accreditation-instrument";

const ReportPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ reportId: string }>;
  searchParams: Promise<{ ["self-survey"]: string }>;
}) => {
  const { reportId } = await params;
  const query = await searchParams;
  const surveyVisit = await getSurveyVisitStructureById(reportId);
  const areaFolders =
    surveyVisit?.phaseOneRequirements.instrumentFolder.areaFolders;
  const instrument = await getInstrumentStructureById(
    surveyVisit?.phaseOneRequirements.instrumentId!
  );
  const weightedTotal = instrument?.area.reduce(
    (sum, area) => (sum += area.weight),
    0
  );
  areaFolders?.forEach((areaFolder) => {
    const area = areaFolder.area;
    areaFolder.area.weight = (area.weight / weightedTotal!) * 100;
  });
  return (
    <div className="h-full flex">
      <ScrollArea className="h-full flex-1">
        <PDFViewer
          pdfComponent={
            <SelfSurveyReportPDF
              surveyName={query["self-survey"]}
              areaFolders={areaFolders as unknown as AreaFolderDTO[]}
              dateEnded={surveyVisit?.selfSurveyEndedAt}
            />
          }
        />
      </ScrollArea>
    </div>
  );
};

export default ReportPage;
