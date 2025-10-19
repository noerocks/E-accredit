import SelfSurveyCards from "@/components/admin/self-survey/self-survey-cards";
import { getAllSurveyVisitOpenForSelfSurvey } from "@/lib/dal/survey-visit";
import { SearchCheck } from "lucide-react";

const SelfSurveysPage = async () => {
  const surveyVisits = await getAllSurveyVisitOpenForSelfSurvey();
  console.log(surveyVisits);
  return (
    <div className="max-w-3/4 mx-auto mt-10">
      <div className="mb-10">
        <p className="text-3xl flex items-center gap-2">
          <SearchCheck />
          Self Survey
        </p>
      </div>
      <SelfSurveyCards surveyVisits={surveyVisits} />
    </div>
  );
};

export default SelfSurveysPage;
