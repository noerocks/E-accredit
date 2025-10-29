import SelfSurveyReportPDF from "@/components/admin/self-survey/self-survey-report-pdf";
import PDFViewer from "@/components/pdf-viewer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getInstrumentStructureById } from "@/lib/dal/instrument";
import { getSurveyVisitStructureById } from "@/lib/dal/survey-visit";
import { AreaFolderDTO } from "@/lib/dto/accreditation-instrument";
import { SurveyTeamType } from "@/lib/generated/prisma";

const ReportPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ ["phase-two"]: string }>;
}) => {
  const { id } = await params;
  const query = await searchParams;
  const surveyVisitStructure = await getSurveyVisitStructureById(id);
  const level = surveyVisitStructure?.level;
  const phaseOnePortfolio = await getSurveyVisitStructureById(
    surveyVisitStructure?.accreditation.surveyVisits.find(
      (survey) =>
        survey.level.label === level?.label && survey.level.phase === "PHASE_1"
    )?.id!
  );
  const areaFolders =
    phaseOnePortfolio?.phaseOneRequirements.instrumentFolder.areaFolders;
  const instrument = await getInstrumentStructureById(
    phaseOnePortfolio?.phaseOneRequirements.instrumentId!
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
              surveyName={query["phase-two"]}
              areaFolders={areaFolders as unknown as AreaFolderDTO[]}
              dateEnded={phaseOnePortfolio?.selfSurveyEndedAt}
              surveyType={SurveyTeamType.INTERNAL}
            />
          }
        />
      </ScrollArea>
    </div>
  );
};

export default ReportPage;
