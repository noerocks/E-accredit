import SelfSurveyCards from "@/components/admin/self-survey/self-survey-cards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllSurveyVisit } from "@/lib/dal/survey-visit";
import { SurveyTeamType } from "@/lib/generated/prisma";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SearchCheck } from "lucide-react";

const ActualSurveysPage = async () => {
  const surveyVisits = await getAllSurveyVisit();
  const openSurveyVisits =
    surveyVisits?.filter(
      (survey) =>
        survey.openForActualSurvey &&
        survey.surveyResultStatus !== "GRANTED" &&
        survey.surveyResultStatus !== "NOT_GRANTED"
    ) ?? [];
  const doneSurveyVisits =
    surveyVisits?.filter(
      (survey) =>
        !survey.openForSelfSurvey &&
        (survey.surveyResultStatus === "GRANTED" ||
          survey.surveyResultStatus === "NOT_GRANTED")
    ) ?? [];
  return (
    <ScrollArea className="h-full">
      <div className="max-w-3/4 mx-auto mt-10">
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
          <TabsContent value="open">
            <SelfSurveyCards
              surveyVisits={openSurveyVisits.sort(
                (a, b) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
              )}
              surveyType={SurveyTeamType.EXTERNAL}
            />
          </TabsContent>
          <TabsContent value="history">
            <SelfSurveyCards
              surveyVisits={doneSurveyVisits.sort(
                (a, b) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
              )}
              surveyType={SurveyTeamType.EXTERNAL}
            />
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
};

export default ActualSurveysPage;
