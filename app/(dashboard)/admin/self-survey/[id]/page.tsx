import { DataTable } from "@/components/admin/accreditation/data-table";
import SelfSurveyReportPDF from "@/components/admin/self-survey/self-survey-report-pdf";
import { columns } from "@/components/admin/self-survey/survey-visit/columns";
import PDFViewer from "@/components/pdf-viewer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  getInstrumentById,
  getInstrumentStructureById,
} from "@/lib/dal/instrument";
import { getSurveyVisitStructureById } from "@/lib/dal/survey-visit";
import {
  AreaFolderDTO,
  PhaseOneInstrumentDTO,
} from "@/lib/dto/accreditation-instrument";
import { SurveyVisitDTO } from "@/lib/dto/survey-visit";
import { SurveyTeamType } from "@/lib/generated/prisma";
import { calculateGrandMean, formatAccreditationName } from "@/lib/utils";
import { pdf } from "@react-pdf/renderer";
import clsx from "clsx";
import { Check, CircleDot, SearchCheck } from "lucide-react";

const SelfSurveyPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
}) => {
  const { id } = await params;
  const surveyVisitStructure = await getSurveyVisitStructureById(id);
  const program = surveyVisitStructure?.accreditation.program;
  const level = surveyVisitStructure?.level;
  const areaFolders =
    surveyVisitStructure?.phaseOneRequirements?.instrumentFolder?.areaFolders?.sort(
      (a, b) => a.area.label.localeCompare(b.area.label)
    );
  const indicators = areaFolders?.flatMap((area) =>
    area.parameterFolders.flatMap((parameter) =>
      parameter.indicatorFolders.flatMap((indicator) => indicator.evidenceFiles)
    )
  );
  const instrument = await getInstrumentStructureById(
    surveyVisitStructure?.phaseOneRequirements.instrumentId!
  );
  const weightedTotal = instrument?.area.reduce(
    (sum, area) => (sum += area.weight),
    0
  );
  areaFolders?.forEach((areaFolder) => {
    const area = areaFolder.area;
    areaFolder.area.weight = (area.weight / weightedTotal!) * 100;
  });
  console.log(areaFolders);
  const ratings = indicators
    ?.map((indicator) =>
      indicator.ratings.find((rating) => rating.type === "INTERNAL")
    )
    .filter((rating) => rating);
  const complete =
    ratings?.length === indicators?.length &&
    areaFolders?.every(
      (area) =>
        area.strengths.find((strength) => strength.type === "SELF_SURVEY") &&
        area.weaknesses.find((weakness) => weakness.type === "SELF_SURVEY")
    );
  console.log(
    calculateGrandMean(
      areaFolders as unknown as AreaFolderDTO[],
      SurveyTeamType.INTERNAL
    )
  );
  return (
    <ScrollArea className="h-full">
      <div className="flex flex-col gap-5 max-w-5/6 mx-auto my-10">
        <p className="flex items-center gap-2 text-2xl">
          <SearchCheck />
          Self Survey
        </p>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              {formatAccreditationName(program?.code!, level!)}
            </CardTitle>
            <CardDescription>{program?.name}</CardDescription>
          </CardHeader>
          <CardFooter className="flex items-cente justify-between">
            <p
              className={clsx(
                "py-2 px-3 dark:border-2 border rounded-md flex items-center gap-2",
                {
                  "bg-green-400/5 text-green-600 border-green-400": complete,
                  "bg-blue-500/5 text-blue-500 border-blue-500": !complete,
                }
              )}
            >
              <CircleDot size={15} />
              {complete ? "Complete" : "On Going"}
            </p>
            {complete && (
              <Button>
                <Check />
                End Survey
              </Button>
            )}
          </CardFooter>
        </Card>
        <Tabs defaultValue="area">
          <TabsList className="bg-background border">
            <TabsTrigger value="area">Area Ratings</TabsTrigger>
            <TabsTrigger value="results">Overall Survey Results</TabsTrigger>
          </TabsList>
          <TabsContent value="area">
            <Card className="bg-background">
              <CardContent>
                <DataTable
                  columns={columns}
                  data={(areaFolders as unknown as AreaFolderDTO[]) || []}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="results">
            <PDFViewer pdfComponent={<SelfSurveyReportPDF />} />
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
};

export default SelfSurveyPage;
