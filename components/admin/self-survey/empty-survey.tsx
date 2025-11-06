import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileArchive } from "lucide-react";

const EmptySurvey = ({
  surveyType,
}: {
  surveyType: "self survey" | "actual survey";
}) => {
  return (
    <Card className="h-100 flex flex-col items-center justify-center bg-background">
      <CardContent className="flex flex-col gap-5">
        <p className="text-xl">
          {`There are no open ${surveyType}s as of the moment`}
        </p>
        <p className="text-muted-foreground">
          {`When a new ${surveyType} becomes available, it will appear here.`}
        </p>
        <Button>
          <FileArchive />
          View Survey Visit Portfolios
        </Button>
      </CardContent>
    </Card>
  );
};

export default EmptySurvey;
