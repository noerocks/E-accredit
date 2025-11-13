import EmptySurvey from "@/components/admin/self-survey/empty-survey";
import NoAssignments from "@/components/admin/self-survey/no-assignments";
import SelfSurveyCards from "@/components/admin/self-survey/self-survey-cards";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { verifySession } from "@/lib/action/session";
import { getAllSurveyVisit } from "@/lib/dal/survey-visit";
import { SurveyVisitDisplayDTO } from "@/lib/dto/survey-visit";
import { SurveyTeamType } from "@/lib/generated/prisma";
import { SearchCheck } from "lucide-react";

const SelfSurveysPage = async () => {
  const { user } = await verifySession();
  const surveyVisits = await getAllSurveyVisit();
  const assignedSurveyVisit = (
    surveyVisits?.filter(
      (visit) =>
        (visit.surveyTeam.find(
          (team) =>
            team.type === "INTERNAL" &&
            team.areaChairs.some((chair) => chair.userId === user.id)
        ) ||
          visit.accreditation.program.programHeadId === user.id) &&
        visit.level.phase !== "PHASE_2"
    ) ?? []
  ).reduce(
    (group, survey) => {
      const program = survey.accreditation.program;
      (group[program.code] = group[program.code] ?? []).push(survey);
      return group;
    },
    {} as Record<string, SurveyVisitDisplayDTO[]>
  );
  const assignedProgramCodes = Object.keys(assignedSurveyVisit);
  const openSurveyVisits =
    surveyVisits?.filter(
      (survey) =>
        survey.openForSelfSurvey && survey.selfSurveyStatus !== "COMPLETE"
    ) ?? [];
  const doneSurveyVisits = (
    surveyVisits?.filter(
      (survey) =>
        !survey.openForSelfSurvey &&
        survey.selfSurveyStatus === "COMPLETE" &&
        survey.level.phase !== "PHASE_2"
    ) ?? []
  ).reduce(
    (groups, survey) => {
      const program = survey.accreditation.program;
      (groups[program.code] = groups[program.code] ?? []).push(survey);
      return groups;
    },
    {} as Record<string, SurveyVisitDisplayDTO[]>
  );
  const programCodes = Object.keys(doneSurveyVisits);
  return (
    <ScrollArea className="h-full">
      <div className="max-w-3/4 mx-auto my-10">
        <div className="mb-10">
          <p className="text-3xl flex items-center gap-2">
            <SearchCheck />
            Self Survey
          </p>
        </div>
        <Tabs defaultValue="open">
          <TabsList className="bg-background border">
            <TabsTrigger value="open">Open For Survey</TabsTrigger>
            {(user.role === "ACCREDITOR" ||
              user.role === "ACCREDITATION_OFFICER") && (
              <TabsTrigger value="assignments">My Assignments</TabsTrigger>
            )}
            <TabsTrigger value="history">Survey History</TabsTrigger>
          </TabsList>
          <hr />
          <TabsContent value="open">
            {openSurveyVisits.length === 0 ? (
              <EmptySurvey surveyType="self survey" />
            ) : (
              <SelfSurveyCards
                surveyVisits={openSurveyVisits.sort(
                  (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
                )}
                surveyType={SurveyTeamType.INTERNAL}
              />
            )}
          </TabsContent>
          {(user.role === "ACCREDITOR" ||
            user.role === "ACCREDITATION_OFFICER") && (
            <TabsContent value="assignments">
              {assignedProgramCodes.length > 0 ? (
                <Tabs defaultValue={assignedProgramCodes[0]}>
                  <TabsList className="bg-background border">
                    {assignedProgramCodes.map((code) => (
                      <TabsTrigger value={code} key={code}>
                        {code}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {assignedProgramCodes.map((code) => (
                    <TabsContent value={code} key={code}>
                      <SelfSurveyCards
                        surveyVisits={assignedSurveyVisit[code].sort(
                          (a, b) =>
                            new Date(b.createdAt).getTime() -
                            new Date(a.createdAt).getTime()
                        )}
                        surveyType={SurveyTeamType.INTERNAL}
                      />
                    </TabsContent>
                  ))}
                </Tabs>
              ) : (
                <NoAssignments />
              )}
            </TabsContent>
          )}
          <TabsContent value="history">
            {programCodes.length > 0 && (
              <Tabs defaultValue={programCodes[0]}>
                <TabsList className="bg-background border">
                  {programCodes.map((code) => (
                    <TabsTrigger value={code} key={code}>
                      {code}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {programCodes.map((code) => (
                  <TabsContent value={code} key={code}>
                    <SelfSurveyCards
                      surveyVisits={doneSurveyVisits[code].sort(
                        (a, b) =>
                          new Date(b.createdAt).getTime() -
                          new Date(a.createdAt).getTime()
                      )}
                      surveyType={SurveyTeamType.INTERNAL}
                    />
                  </TabsContent>
                ))}
              </Tabs>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
};

export default SelfSurveysPage;
