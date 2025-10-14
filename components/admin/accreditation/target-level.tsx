import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Level } from "@/lib/generated/prisma";
import { formatLevelName } from "@/lib/utils";
import { CheckCircle, CircleQuestionMark } from "lucide-react";

const TargetLevel = ({ level }: { level: Level }) => {
  return (
    <Card className="flex-1 bg-background">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <CheckCircle size={20} />
          <p>Target Accredited Status</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex-1 flex items-center gap-2 text-muted-foreground">
            <CircleQuestionMark size={15} />
            <p className="text-sm">Status</p>
          </div>
          <p>
            {level?.label === "PRELIMINARY_SURVEY_VISIT"
              ? "Candidate"
              : formatLevelName(level!)}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1 flex items-center gap-2 text-muted-foreground">
            <CircleQuestionMark size={15} />
            <p className="text-sm">Required Grand Mean</p>
          </div>
          <p>{Number(level?.requiredGrandMean)}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1 flex items-center gap-2 text-muted-foreground">
            <CircleQuestionMark size={15} />
            <p className="text-sm">Required Area Mean</p>
          </div>
          <p>{Number(level?.requiredAreaMean)}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1 flex items-center gap-2 text-muted-foreground">
            <CircleQuestionMark size={15} />
            <p className="text-sm">Years Effective</p>
          </div>
          <p>{Number(level?.yearsEffective)}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TargetLevel;
