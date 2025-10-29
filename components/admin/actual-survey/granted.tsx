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
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import ConfirmPhaseOne from "./confirm-phase-one";

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
  const formattedStatus = screamingSnakeToTitle(status)
    ?.split(" ")
    .map((word, i) => (i === 1 ? word.toUpperCase() : word))
    .join(" ");
  const session = await verifySession();
  const user = session.user;
  return (
    <Card className="bg-background">
      <CardHeader>
        <CardTitle className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
          <p className="text-sm text-muted-foreground">Evaluation Outcome</p>
          <p className="text-green-500 font-medium">
            {level?.rank === 4
              ? "Qualified for Level III Phase 2"
              : `Eligible for ${formattedStatus} status`}
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p className="text-sm">
          The program <strong>{program.name}</strong> has successfully passed
          the <strong>Level III Phase 1</strong> accreditation survey. The
          coordinator may now confirm this result in the system.
        </p>
        <p className="text-sm text-muted-foreground">
          The institution will then be responsible for selecting the required
          criteria and preparing the corresponding evidences for the{" "}
          <strong>Level III Phase 2</strong> evaluation.
        </p>
      </CardContent>{" "}
      <CardFooter className="flex justify-end">
        {surveyResultStatus !== "GRANTED" &&
          (level?.rank !== 4 ? (
            <UploadFileForm
              allowFileUploads={true}
              user={user}
              accreditationId={accreditationId}
              level={level}
              message="Upload Accreditation Certificate"
            />
          ) : (
            <ConfirmPhaseOne accreditationId={accreditationId} level={level} />
          ))}
      </CardFooter>
    </Card>
  );
};

export default Granted;
