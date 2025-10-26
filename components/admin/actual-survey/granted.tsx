import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Level, Program, SurveyResultStatus } from "@/lib/generated/prisma";
import { screamingSnakeToTitle } from "@/lib/utils";
import UploadFileForm from "../evidence-file/upload-file-form";
import { verifySession } from "@/lib/action/session";

const Granted = async ({
  status,
  program,
  accreditationId,
  level,
  surveyResultStatus,
}: {
  status: string;
  program: Program;
  accreditationId: string | undefined;
  level: Level | undefined;
  surveyResultStatus: SurveyResultStatus;
}) => {
  const formattedStatus = screamingSnakeToTitle(status);
  const session = await verifySession();
  const user = session.user;
  return (
    <Card className="bg-background">
      <CardHeader>
        <CardTitle className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
          <p className="text-sm text-muted-foreground">Evaluation Outcome</p>
          <p className="text-green-500 font-medium">
            Eligible for {formattedStatus} status
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p className="text-sm">
          The coordinator may now grant the <strong>{formattedStatus}</strong>{" "}
          status to <strong>{program.name}</strong>.
        </p>
        <p className="text-sm text-muted-foreground">
          A certificate of accreditation must be submitted to finalize the
          status.
        </p>
      </CardContent>
      {surveyResultStatus !== "GRANTED" && (
        <CardFooter className="flex justify-end">
          <UploadFileForm
            allowFileUploads={true}
            user={user}
            accreditationId={accreditationId}
            level={level}
          />
        </CardFooter>
      )}
    </Card>
  );
};

export default Granted;
