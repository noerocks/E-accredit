import AccreditationSidebar from "@/components/admin/accreditation/accreditation-sidebar";
import { getSurveyVisitStructureById } from "@/lib/dal/survey-visit";
import { PhaseOneInstrumentDTO } from "@/lib/dto/accreditation-instrument";
import React from "react";

const AccreditationLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const surveyVisitStructure = await getSurveyVisitStructureById(id);
  return (
    <div className="flex h-full">
      <AccreditationSidebar
        instrumentFolder={
          surveyVisitStructure?.phaseOneRequirements
            ?.instrumentFolder as PhaseOneInstrumentDTO
        }
        phaseTwoFolder={
          surveyVisitStructure?.phaseTwoRequirements?.phaseTwoFolder
        }
        selfSurveyStatus={surveyVisitStructure?.selfSurveyStatus}
        surveyVisitId={id}
      />
      <div className="flex-1 h-full overflow-auto">{children}</div>
    </div>
  );
};

export default AccreditationLayout;
