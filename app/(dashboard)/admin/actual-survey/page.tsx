import SelfSurveyCards from "@/components/admin/self-survey/self-survey-cards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllSurveyVisit } from "@/lib/dal/survey-visit";
import { SurveyTeamType } from "@/lib/generated/prisma";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SearchCheck } from "lucide-react";
import { SurveyVisitDisplayDTO } from "@/lib/dto/survey-visit";
import EmptySurvey from "@/components/admin/self-survey/empty-survey";

const ActualSurveysPage = async () => {
  const surveyVisits = await getAllSurveyVisit();
  const openSurveyVisits =
    surveyVisits?.filter(
      (survey) =>
        survey.openForActualSurvey &&
        survey.surveyResultStatus !== "GRANTED" &&
        survey.surveyResultStatus !== "NOT_GRANTED"
    ) ?? [];
  const doneSurveyVisits = (
    surveyVisits?.filter(
      (survey) =>
        !survey.openForSelfSurvey &&
        (survey.surveyResultStatus === "GRANTED" ||
          survey.surveyResultStatus === "NOT_GRANTED" ||
          survey.surveyResultStatus === "DEFERRED")
    ) ?? []
  ).reduce(
    (group, survey) => {
      const program = survey.accreditation.program;
      (group[program.code] = group[program.code] ?? []).push(survey);
      return group;
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
            Actual Survey
          </p>
        </div>
        <Tabs defaultValue="open">
          <TabsList className="bg-background border">
            <TabsTrigger value="open">Open For Survey</TabsTrigger>
            <TabsTrigger value="history">Survey History</TabsTrigger>
          </TabsList>
          <hr />
          <TabsContent value="open">
            {openSurveyVisits.length === 0 ? (
              <EmptySurvey surveyType="actual survey" />
            ) : (
              <SelfSurveyCards
                surveyVisits={openSurveyVisits.sort(
                  (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
                )}
                surveyType={SurveyTeamType.EXTERNAL}
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
                      surveyType={SurveyTeamType.EXTERNAL}
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

export default ActualSurveysPage;
