import SelfSurveyCards from "@/components/admin/self-survey/self-survey-cards";
import { getAllSurveyVisitOpenForActualSurvey } from "@/lib/dal/survey-visit";
import { SurveyTeamType } from "@/lib/generated/prisma";
import { SearchCheck } from "lucide-react";

const ActualSurveysPage = async () => {
  const surveyVisits = await getAllSurveyVisitOpenForActualSurvey();
  return (
    <div className="max-w-3/4 mx-auto mt-10">
      <div className="mb-10">
        <p className="text-3xl flex items-center gap-2">
          <SearchCheck />
          Actual Survey
        </p>
      </div>
      <SelfSurveyCards
        surveyVisits={surveyVisits}
        surveyType={SurveyTeamType.EXTERNAL}
      />
    </div>
  );
};

export default ActualSurveysPage;
