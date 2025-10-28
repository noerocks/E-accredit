import { getSurveyVisitById } from "@/lib/dal/survey-visit";
import { SurveyVisit } from "@/lib/generated/prisma";
import { Info } from "lucide-react";

const Banner = async ({ surveyVisitId }: { surveyVisitId: string }) => {
  const {
    allowFileUploads,
    allowEdits,
    openForSelfSurvey,
    openForActualSurvey,
    surveyResultStatus,
  } = (await getSurveyVisitById(surveyVisitId!)) as SurveyVisit;
  let message = undefined;
  if (
    surveyResultStatus === "GRANTED" ||
    surveyResultStatus === "NOT_GRANTED"
  ) {
    message =
      "This portfolio is archived. File uploads and edits are disabled.";
  } else if (!allowFileUploads && allowEdits) {
    message = "File uploads are currently disabled by the QA.";
  } else if (!allowFileUploads && !allowEdits) {
    message = "File uploads and edits are currently disabled by the QA.";
  } else if (!allowEdits && allowFileUploads) {
    message =
      "Edits (changing file versions and file deletions) are currently disabled by the QA.";
  } else if (openForSelfSurvey) {
    message =
      "This program is undergoing a self survey. File uploads and edits are temporarily disabled by the QA.";
  }
  return (
    <div>
      {message && (
        <div className="p-5 bg-blue-500/5 text-blue-500 flex items-center gap-2 text-sm">
          <Info size={15} />
          {message}
        </div>
      )}
    </div>
  );
};

export default Banner;
