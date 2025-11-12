import AccreditationSidebar from "@/components/admin/accreditation/accreditation-sidebar";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { verifySession } from "@/lib/action/session";
import { getSurveyVisitStructureById } from "@/lib/dal/survey-visit";
import { PhaseOneInstrumentDTO } from "@/lib/dto/accreditation-instrument";
import { Info } from "lucide-react";

const ActualSurveyLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { user } = await verifySession();
  const surveyVisitStructure = await getSurveyVisitStructureById(id);
  const surveyResultStatus = surveyVisitStructure?.surveyResultStatus;
  const isExternalCoordinator =
    surveyVisitStructure?.surveyTeam.find(
      (team) => team.type === "EXTERNAL" && team.teamLeadId === user.id
    ) !== undefined;
  return (
    <div className="flex h-full">
      <AccreditationSidebar
        instrumentFolder={
          surveyVisitStructure?.phaseOneRequirements
            ?.instrumentFolder as unknown as PhaseOneInstrumentDTO
        }
        phaseTwoFolder={
          surveyVisitStructure?.phaseTwoRequirements?.phaseTwoFolder
        }
        surveyResultStatus={surveyResultStatus}
        selfSurveyStatus={surveyVisitStructure?.selfSurveyStatus}
        surveyVisitId={id}
        userId={user.id}
      />
      <div className="flex-1 h-full overflow-auto">{children}</div>
    </div>
  );
};

export default ActualSurveyLayout;
