import AccreditationSettings from "@/components/admin/accreditation/accreditation-settings";
import Banner from "@/components/admin/accreditation/banner";
import SurveyVisitStatus from "@/components/admin/accreditation/survey-visit-status";
import TargetLevel from "@/components/admin/accreditation/target-level";
import MarkAsCompleteButton from "@/components/admin/parameter/mark-as-complete";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { verifySession } from "@/lib/action/session";
import { getInstrumentStructureById } from "@/lib/dal/instrument";
import { getSurveyVisitStructureById } from "@/lib/dal/survey-visit";
import { AreaFolderDTO } from "@/lib/dto/accreditation-instrument";
import { Progress, SurveyTeamType } from "@/lib/generated/prisma";
import {
  calculateGrandMean,
  formatAccreditationName,
  screamingSnakeToTitle,
} from "@/lib/utils";
import clsx from "clsx";
import { CircleDot, FileArchive } from "lucide-react";

const PhaseTwoPortfolio = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const session = await verifySession();
  const user = session.user;
  const surveyVisitStructure = await getSurveyVisitStructureById(id);
  const program = surveyVisitStructure?.accreditation.program;
  const level = surveyVisitStructure?.level;
  const phaseOnePortfolio = await getSurveyVisitStructureById(
    surveyVisitStructure?.accreditation.surveyVisits.find(
      (survey) =>
        survey.level.label === level?.label && survey.level.phase === "PHASE_1"
    )?.id!
  );
  const areaFolders =
    phaseOnePortfolio?.phaseOneRequirements?.instrumentFolder?.areaFolders?.sort(
      (a, b) => a.area.label.localeCompare(b.area.label)
    );
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
  const surveyStatus = {
    selfSurveyStatus: phaseOnePortfolio?.selfSurveyStatus,
    selfSurveyGrandMean: calculateGrandMean(
      areaFolders as unknown as AreaFolderDTO[],
      SurveyTeamType.INTERNAL
    ),
    actualSurveyStatus: phaseOnePortfolio?.actualSurveyStatus,
    actualSurveyGrandMean: calculateGrandMean(
      areaFolders as unknown as AreaFolderDTO[],
      SurveyTeamType.EXTERNAL
    ),
    surveyResultStatus: phaseOnePortfolio?.surveyResultStatus,
  };
  const isAdmin = user.role === "ADMIN";
  const isProgramHead = user.id === program?.programHeadId;
  const phaseTwoAreaFolders =
    surveyVisitStructure?.phaseTwoRequirements?.phaseTwoFolder
      ?.phaseTwoAreaFolders;
  const markAsCompleteVisible =
    (isAdmin || isProgramHead) &&
    phaseTwoAreaFolders
      ?.flatMap((area) => area.areaFiles)
      .every((file) => file.status === "SUBMITTED") &&
    surveyVisitStructure?.status !== "COMPLETE";
  return (
    <ScrollArea className="h-full">
      <Banner surveyVisitId={id} />
      <div className="max-w-4/5 mx-auto my-10 flex flex-col gap-5">
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
              {markAsCompleteVisible && (
                <MarkAsCompleteButton
                  surveyVisitId={surveyVisitStructure?.id}
                />
              )}
            </div>
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
            surveyResultStatus={surveyVisitStructure?.surveyResultStatus}
          />
          <TargetLevel level={level!} />
          <SurveyVisitStatus surveyStatus={surveyStatus} />
        </div>
      </div>
    </ScrollArea>
  );
};

export default PhaseTwoPortfolio;
