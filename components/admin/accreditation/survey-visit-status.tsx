"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleQuestionMark, SearchCheck } from "lucide-react";

const SurveyVisitStatus = () => {
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
          <p></p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1 flex items-center gap-2 text-muted-foreground">
            <CircleQuestionMark size={15} />
            <p className="text-sm">Acquired Grand Mean</p>
          </div>
          <p></p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1 flex items-center gap-2 text-muted-foreground">
            <CircleQuestionMark size={15} />
            <p className="text-sm">Actual Survey</p>
          </div>
          <p></p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1 flex items-center gap-2 text-muted-foreground">
            <CircleQuestionMark size={15} />
            <p className="text-sm">Acquired Grand Mean</p>
          </div>
          <p></p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SurveyVisitStatus;
