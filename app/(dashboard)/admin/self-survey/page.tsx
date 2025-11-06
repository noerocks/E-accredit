import EmptySurvey from "@/components/admin/self-survey/empty-survey";
import SelfSurveyCards from "@/components/admin/self-survey/self-survey-cards";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllSurveyVisit } from "@/lib/dal/survey-visit";
import { SurveyVisitDisplayDTO } from "@/lib/dto/survey-visit";
import { SurveyTeamType } from "@/lib/generated/prisma";
import { SearchCheck } from "lucide-react";

const SelfSurveysPage = async () => {
  const surveyVisits = await getAllSurveyVisit();
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
            <TabsTrigger value="history">Survey History</TabsTrigger>
          </TabsList>
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
          <TabsContent value="history">
            {programCodes && (
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
