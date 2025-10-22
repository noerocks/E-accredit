"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SurveyStatus } from "@/lib/generated/prisma";
import { screamingSnakeToTitle } from "@/lib/utils";
import { CircleQuestionMark, SearchCheck } from "lucide-react";

const SurveyVisitStatus = ({
  surveyStatus,
}: {
  surveyStatus: {
    selfSurveyStatus: SurveyStatus | undefined;
    selfSurveyGrandMean: number | undefined;
    actualSurveyStatus: SurveyStatus | undefined;
    actualSurveyGrandMean: number | undefined;
  };
}) => {
  return (
    <Card className="flex-1 bg-background">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <SearchCheck />
          Survey Visit Status
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex-1 flex items-center gap-2 text-muted-foreground">
            <CircleQuestionMark size={15} />
            <p className="text-sm">Self Survey</p>
          </div>
          <p>{screamingSnakeToTitle(surveyStatus.selfSurveyStatus!)}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1 flex items-center gap-2 text-muted-foreground">
            <CircleQuestionMark size={15} />
            <p className="text-sm">Acquired Grand Mean</p>
          </div>
          <p>
            {surveyStatus.selfSurveyGrandMean
              ? surveyStatus.selfSurveyGrandMean.toFixed(2)
              : "-"}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1 flex items-center gap-2 text-muted-foreground">
            <CircleQuestionMark size={15} />
            <p className="text-sm">Actual Survey</p>
          </div>
          <p>{screamingSnakeToTitle(surveyStatus.actualSurveyStatus!)}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1 flex items-center gap-2 text-muted-foreground">
            <CircleQuestionMark size={15} />
            <p className="text-sm">Acquired Grand Mean</p>
          </div>
          <p>
            {surveyStatus.actualSurveyGrandMean
              ? surveyStatus.actualSurveyGrandMean?.toFixed(2)
              : "-"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SurveyVisitStatus;
