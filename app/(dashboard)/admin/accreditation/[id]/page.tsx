import AccreditationSettings from "@/components/admin/accreditation/accreditation-settings";
import Banner from "@/components/admin/accreditation/banner";
import { columns } from "@/components/admin/accreditation/columns";
import { DataTable } from "@/components/admin/accreditation/data-table";
import MigrateFiles from "@/components/admin/accreditation/migrate-files";
import SurveyVisitStatus from "@/components/admin/accreditation/survey-visit-status";
import TargetLevel from "@/components/admin/accreditation/target-level";
import MarkAsCompleteButton from "@/components/admin/parameter/mark-as-complete";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { verifySession } from "@/lib/action/session";
import { getInstrumentStructureById } from "@/lib/dal/instrument";
import {
  getAllPendingSurveyVisitsByInstrumentId,
  getSurveyVisitStructureById,
} from "@/lib/dal/survey-visit";
import { AreaFolderDTO } from "@/lib/dto/accreditation-instrument";
import {
  Progress,
  SurveyResultStatus,
  SurveyTeamType,
} from "@/lib/generated/prisma";
import {
  calculateGrandMean,
  formatAccreditationName,
  screamingSnakeToTitle,
} from "@/lib/utils";
import clsx from "clsx";
import { CircleDot, FileArchive } from "lucide-react";

const ProgramAccreditationPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { user } = await verifySession();
  const surveyVisitStructure = await getSurveyVisitStructureById(id);
  const level = surveyVisitStructure?.level;
  const program = surveyVisitStructure?.accreditation.program;
  const areaFolders =
    surveyVisitStructure?.phaseOneRequirements?.instrumentFolder?.areaFolders?.sort(
      (a, b) => a.area.label.localeCompare(b.area.label)
    );
  const isAdmin = user.role === "ADMIN";
  const isProgramHead = user.id === program?.programHead?.id;
  const marksAsCompleteVisible =
    areaFolders?.every((area) => area.status === "COMPLETE") &&
    surveyVisitStructure?.status !== "COMPLETE" &&
    (isProgramHead || isAdmin);
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
  const surveyStatus = {
    selfSurveyStatus: surveyVisitStructure?.selfSurveyStatus,
    selfSurveyGrandMean: calculateGrandMean(
      areaFolders as unknown as AreaFolderDTO[],
      SurveyTeamType.INTERNAL
    ),
    actualSurveyStatus: surveyVisitStructure?.actualSurveyStatus,
    actualSurveyGrandMean: calculateGrandMean(
      areaFolders as unknown as AreaFolderDTO[],
      SurveyTeamType.EXTERNAL
    ),
    surveyResultStatus: surveyVisitStructure?.surveyResultStatus,
  };
  const surveyVisits = await getAllPendingSurveyVisitsByInstrumentId(
    surveyVisitStructure?.phaseOneRequirements.instrumentId!
  );
  const surveyResultStatus = surveyVisitStructure?.surveyResultStatus;
  return (
    <ScrollArea className="h-full">
      <Banner surveyVisitId={String(id!)} />
      <div className="max-w-5/6 mx-auto my-10 flex flex-col gap-5">
        <p className="text-2xl flex items-center gap-2">
          <FileArchive />
          Survey Visit Portfolio
        </p>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{`${formatAccreditationName(
              program?.code!,
              level!
            )}`}</CardTitle>
            <CardDescription>{program?.name}</CardDescription>
          </CardHeader>
          <CardFooter className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p
                className={clsx(
                  "py-2 px-3 border-2 rounded-md flex items-center gap-2",
                  {
                    "bg-yellow-400/5 text-yellow-600 border-yellow-400":
                      surveyVisitStructure?.status === Progress.IN_PROGRESS,
                    "bg-green-400/5 text-green-600 border-green-400":
                      surveyVisitStructure?.status === Progress.COMPLETE,
                  }
                )}
              >
                <CircleDot size={15} />
                {surveyVisitStructure?.status === "IN_PROGRESS"
                  ? screamingSnakeToTitle(String(surveyVisitStructure?.status!))
                  : "Ready For Survey"}
              </p>
              {marksAsCompleteVisible && (
                <MarkAsCompleteButton
                  surveyVisitId={surveyVisitStructure?.id}
                />
              )}
            </div>
            {surveyVisitStructure?.status === "COMPLETE" && (
              <MigrateFiles surveyVisitPortfolios={surveyVisits!} />
            )}
          </CardFooter>
        </Card>
        <div className="flex gap-5">
          <AccreditationSettings
            allowFileUploads={surveyVisitStructure?.allowFileUploads}
            allowEdits={surveyVisitStructure?.allowEdits}
            openForSelfSurvey={surveyVisitStructure?.openForSelfSurvey}
            selfSurveyStatus={surveyVisitStructure?.selfSurveyStatus}
            openForActualSurvey={surveyVisitStructure?.openForActualSurvey}
            actualSurveyStatus={surveyVisitStructure?.actualSurveyStatus}
            status={surveyVisitStructure?.status}
            surveyResultStatus={surveyResultStatus}
          />
          <TargetLevel level={level!} />
          <SurveyVisitStatus surveyStatus={surveyStatus} />
        </div>
        <Card className="bg-background">
          <CardContent>
            <DataTable
              columns={columns}
              data={(areaFolders as unknown as AreaFolderDTO[]) || []}
              isAdmin={isAdmin}
              isProgramHead={isProgramHead}
            />
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  );
};

export default ProgramAccreditationPage;
