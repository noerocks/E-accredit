import Banner from "@/components/admin/accreditation/banner";
import DenyStatusButton from "@/components/admin/actual-survey/deny-button";
import RecommendationsForm from "@/components/admin/area/recommendations-form";
import UploadFileForm from "@/components/admin/evidence-file/upload-file-form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { verifySession } from "@/lib/action/session";
import { getSurveyVisitStructureById } from "@/lib/dal/survey-visit";
import { Progress } from "@/lib/generated/prisma";
import { formatAccreditationName, screamingSnakeToTitle } from "@/lib/utils";
import clsx from "clsx";
import {
  Award,
  Check,
  CheckCircle2,
  CircleDot,
  CircleSlash,
  FileArchive,
  Info,
  MessageCircleMore,
  X,
} from "lucide-react";

const PhaseTwoSurvey = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const session = await verifySession();
  const user = session.user;
  const surveyVisitStructure = await getSurveyVisitStructureById(id);
  const phaseTwoAreaFolders =
    surveyVisitStructure?.phaseTwoRequirements?.phaseTwoFolder
      ?.phaseTwoAreaFolders;
  const program = surveyVisitStructure?.accreditation.program;
  const level = surveyVisitStructure?.level;
  const accreditationId = surveyVisitStructure?.accreditation.id;
  let status =
    level?.label === "PRELIMINARY_SURVEY_VISIT" ? "CANDIDATE" : level?.label;
  let first;
  const remarks = surveyVisitStructure?.remarks[0];
  switch (status) {
    case "CANDIDATE":
      first =
        "1. A preliminary survey visit was conducted by AACCUP team of accreditors";
      break;
    case "LEVEL_I":
      first =
        "1. A first survey visit was conducted by AACCUP team of accreditors;";
      break;
    case "LEVEL_II":
      first =
        "1. A second survey visit was conducted by AACCUP team of accreditors;";
      break;
    case "LEVEL_III":
      first =
        "1. A third survey visit was conducted by AACCUP team of accreditors;";
      break;
    case "LEVEL_IV":
      first =
        "1. A fourth survey visit was conducted by AACCUP team of accreditors;";
      break;
  }
  status = screamingSnakeToTitle(status!)
    ?.split(" ")
    .map((word, i) => (i === 1 ? word.toUpperCase() : word))
    .join(" ");
  const surveyVisitEnded =
    surveyVisitStructure?.actualSurveyStatus === "COMPLETE";
  const surveyResultStatus = surveyVisitStructure?.surveyResultStatus;
  return (
    <ScrollArea className="h-full">
      <div className="max-w-4/5 mx-auto my-10 flex flex-col gap-5">
        <p className="text-2xl flex items-center gap-2">
          <FileArchive />
          Survey Visit Portfolio
        </p>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <p className="text-2xl">{`${formatAccreditationName(
                program?.code!,
                level!
              )}`}</p>
              {surveyResultStatus === "GRANTED" ? (
                level?.rank === 4 ? (
                  <div className="text-green-500 flex items-center gap-2 text-lg">
                    <CheckCircle2 size={20} />
                    <p>Qualified for Level III Phase 2</p>
                  </div>
                ) : (
                  <div className="text-yellow-500 flex items-center gap-2 text-lg">
                    <Award />
                    <p>Grandted</p>
                  </div>
                )
              ) : surveyResultStatus === "DEFERRED" ? (
                <div className="text-muted-foreground flex items-center gap-2">
                  <CircleSlash size={15} />
                  <p>Deferred</p>
                </div>
              ) : surveyResultStatus === "NOT_GRANTED" ? (
                <div className="text-red-500 flex items-center gap-2 text-lg">
                  <CircleSlash size={15} />
                  <p>Not Granted</p>
                </div>
              ) : null}
            </CardTitle>
            <CardDescription>{program?.name}</CardDescription>
          </CardHeader>
          <CardFooter className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p
                className={clsx(
                  "py-2 px-3 border-2 rounded-md flex items-center gap-2",
                  {
                    "bg-yellow-400/5 text-yellow-600 border-yellow-400":
                      surveyVisitStructure?.status === Progress.IN_PROGRESS,
                    "bg-green-400/5 text-green-600 border-green-400":
                      surveyVisitStructure?.status === Progress.COMPLETE,
                  }
                )}
              >
                <CircleDot size={15} />
                {surveyVisitStructure?.status === "IN_PROGRESS"
                  ? screamingSnakeToTitle(String(surveyVisitStructure?.status!))
                  : "Ready For Evaluation "}
              </p>
              {surveyVisitEnded && (
                <p className="py-2 px-3 dark:border-2 border rounded-md flex items-center gap-2 text-muted-foreground">
                  <Check size={15} />
                  Survey Ended
                </p>
              )}
            </div>
          </CardFooter>
        </Card>
        <Tabs defaultValue="grant">
          <TabsList className="bg-background border">
            <TabsTrigger value="grant">Granting Decision</TabsTrigger>
            <TabsTrigger value="remarks">
              {!remarks ? (
                <X className="text-red-500" />
              ) : (
                <Check className="text-green-500" />
              )}
              Remarks
            </TabsTrigger>
          </TabsList>
          <TabsContent value="grant" className="flex flex-col gap-2">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {`${status} Status Qualifications`}
                  <Award className="text-yellow-500" />
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{first}</p>
                  <Check size={15} className="text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    2. The program must achieve a grand mean rating of at least{" "}
                    <strong>{Number(level?.requiredGrandMean)}</strong> as
                    assessed by the accreditation team.
                  </p>
                  <Check size={15} className="text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    3. Each area of the program must have an area mean rating
                    not lower than{" "}
                    <strong>{Number(level?.requiredAreaMean)}</strong>.
                  </p>
                  <Check size={15} className="text-green-500" />
                </div>
                {level?.rank === 3 && (
                  <div className="flex flex-col gap-2 mt-2">
                    <p className="text-sm">
                      {`In addition, to qualify for Level III Re-accredited Status, an undergraduate program must satisfy the first two of the following criteria (mandatory) and any two additional areas (elective) chosen by the institution.
These criteria are as follows:`}
                    </p>
                    <div className="text-sm text-muted-foreground flex flex-col gap-2">
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        {phaseTwoAreaFolders?.map((area) => (
                          <li key={area.id}>{area.area.description}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </CardContent>
              {surveyVisitStructure?.surveyResultStatus === "PENDING" && (
                <CardFooter className="flex justify-end gap-2">
                  <UploadFileForm
                    allowFileUploads={true}
                    user={user}
                    accreditationId={accreditationId}
                    level={level}
                    message="Upload Accreditation Certificate"
                  />
                  <DenyStatusButton
                    status={status}
                    surveyVisitId={surveyVisitStructure?.id!}
                    accreditationId={accreditationId!}
                    level={level!}
                  />
                </CardFooter>
              )}
            </Card>
            <Alert className="bg-background">
              <Info />
              <AlertTitle>Granting Decision</AlertTitle>
              <AlertDescription>
                <p>
                  The decision to grant or not grant the{" "}
                  <strong>Level III Re-accredited Status</strong> shall depend
                  on whether the coordinator
                  <strong>
                    {" "}
                    uploads the official accreditation certificate
                  </strong>
                  (indicating the program has met all required standards). If
                  the standards have not been satisfied, the coordinator shall{" "}
                  <strong>deny the grant</strong> of Level III Re-accredited
                  Status.
                </p>
              </AlertDescription>
            </Alert>
          </TabsContent>
          <TabsContent value="remarks">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircleMore />
                  Remarks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RecommendationsForm
                  user={user}
                  surveyVisitId={surveyVisitStructure?.id}
                  defaultContent={remarks?.content}
                  surveyStatus={surveyVisitStructure?.actualSurveyStatus}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
};

export default PhaseTwoSurvey;
