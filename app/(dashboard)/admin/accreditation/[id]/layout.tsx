import AccreditationSidebar from "@/components/admin/accreditation/accreditation-sidebar";
import { getSurveyVisitStructureById } from "@/lib/dal/survey-visit";
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
          surveyVisitStructure?.phaseOneRequirements?.instrumentFolder
        }
        phaseTwoFolder={
          surveyVisitStructure?.phaseTwoRequirements?.phaseTwoFolder
        }
      />
      <div className="flex-1 h-full overflow-auto">{children}</div>
    </div>
  );
};

export default AccreditationLayout;
