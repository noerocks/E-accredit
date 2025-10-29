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
import LevelThreeGrantDetails from "./level-three-grant-details";

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
              : level?.rank === 2
              ? "Qualified for Level IV Phase 2"
              : `Eligible for ${formattedStatus} status`}
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {level?.rank === 4 ? (
          <LevelThreeGrantDetails
            programName={program.name}
            level="Level III"
          />
        ) : level?.rank === 2 ? (
          <LevelThreeGrantDetails programName={program.name} level="Level IV" />
        ) : (
          <>
            <p className="text-sm">
              The coordinator may now grant the{" "}
              <strong>{formattedStatus}</strong> status to{" "}
              <strong>{program.name}</strong>.
            </p>
            <p className="text-sm text-muted-foreground">
              A certificate of accreditation must be submitted to finalize the
              status.
            </p>
          </>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        {surveyResultStatus !== "GRANTED" &&
          (level?.rank === 4 || level?.rank === 2 ? (
            <ConfirmPhaseOne accreditationId={accreditationId} level={level} />
          ) : (
            <UploadFileForm
              allowFileUploads={true}
              user={user}
              accreditationId={accreditationId}
              level={level}
              message="Upload Accreditation Certificate"
            />
          ))}
      </CardFooter>
    </Card>
  );
};

export default Granted;
