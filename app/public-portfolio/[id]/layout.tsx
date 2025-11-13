import AccreditationSidebar from "@/components/admin/accreditation/accreditation-sidebar";
import Header from "@/components/header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarProvider } from "@/components/ui/sidebar";
import { verifySession } from "@/lib/action/session";
import { getSurveyVisitStructureById } from "@/lib/dal/survey-visit";
import { PhaseOneInstrumentDTO } from "@/lib/dto/accreditation-instrument";
import React from "react";

const PublicPortfolio = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const surveyVisitStructure = await getSurveyVisitStructureById(id);
  return (
    <ScrollArea className="h-screen">
      <div className="flex h-full">
        <SidebarProvider className="h-screen">
          <AccreditationSidebar
            instrumentFolder={
              surveyVisitStructure?.phaseOneRequirements
                ?.instrumentFolder as unknown as PhaseOneInstrumentDTO
            }
            phaseTwoFolder={
              surveyVisitStructure?.phaseTwoRequirements?.phaseTwoFolder
            }
            selfSurveyStatus={surveyVisitStructure?.selfSurveyStatus}
            surveyVisitId={id}
            surveyResultStatus={surveyVisitStructure?.surveyResultStatus}
            userId=""
          />
          <div className="flex-1 h-full overflow-auto">{children}</div>
        </SidebarProvider>
      </div>
    </ScrollArea>
  );
};

export default PublicPortfolio;
