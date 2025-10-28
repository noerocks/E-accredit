import SelfSurveyCards from "@/components/admin/self-survey/self-survey-cards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllSurveyVisit } from "@/lib/dal/survey-visit";
import { SurveyTeamType } from "@/lib/generated/prisma";
import { SearchCheck } from "lucide-react";

const SelfSurveysPage = async () => {
  const surveyVisits = await getAllSurveyVisit();
  const openSurveyVisits =
    surveyVisits?.filter(
      (survey) =>
        survey.openForSelfSurvey && survey.selfSurveyStatus !== "COMPLETE"
    ) ?? [];
  const doneSurveyVisits =
    surveyVisits?.filter(
      (survey) =>
        !survey.openForSelfSurvey && survey.selfSurveyStatus === "COMPLETE"
    ) ?? [];
  return (
    <div className="max-w-3/4 mx-auto mt-10">
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
          <SelfSurveyCards
            surveyVisits={openSurveyVisits}
            surveyType={SurveyTeamType.INTERNAL}
          />
        </TabsContent>
        <TabsContent value="history">
          <SelfSurveyCards
            surveyVisits={doneSurveyVisits}
            surveyType={SurveyTeamType.INTERNAL}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SelfSurveysPage;
