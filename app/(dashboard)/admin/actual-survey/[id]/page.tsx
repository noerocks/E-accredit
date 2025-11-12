import { DataTable } from "@/components/admin/accreditation/data-table";
import { DataTable as ActivityDataTable } from "@/components/admin/accreditation/activity-data-table";
import NextSteps from "@/components/admin/actual-survey/next-steps";
import SurveyResults from "@/components/admin/actual-survey/results";
import { columns } from "@/components/admin/actual-survey/survey-visit/columns";
import { columns as activityColumns } from "@/components/admin/accreditation/activity-columns";
import EndSurveyButton from "@/components/admin/self-survey/end-survey-button";
import SurveyTeam from "@/components/admin/self-survey/survey-team";
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
import { getActivitiesBySurveyVisitId } from "@/lib/dal/audit";
import { getInstrumentStructureById } from "@/lib/dal/instrument";
import {
  getSurveyVisitById,
  getSurveyVisitStructureById,
} from "@/lib/dal/survey-visit";
import { getUsersByRole } from "@/lib/dal/user";
import { AreaFolderDTO } from "@/lib/dto/accreditation-instrument";
import {
  AuditEntity,
  Role,
  SurveyTeam as SurveyTeamSchema,
  SurveyTeamType,
} from "@/lib/generated/prisma";
import { formatAccreditationName } from "@/lib/utils";
import { Level, User } from "@prisma/client";
import clsx from "clsx";
import {
  Award,
  Check,
  CheckCircle2,
  CircleDot,
  CircleSlash,
  Info,
  SearchCheck,
} from "lucide-react";
import { ActivityDTO } from "@/lib/dto/audit";
import { Alert, AlertTitle } from "@/components/ui/alert";

const ActualSurveyPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
}) => {
  const { id } = await params;
  const session = await verifySession();
  const user = session.user;
  const surveyVisitStructure = await getSurveyVisitStructureById(id);
  const program = surveyVisitStructure?.accreditation.program;
  const level = surveyVisitStructure?.level;
  const areaFolders =
    surveyVisitStructure?.phaseOneRequirements?.instrumentFolder?.areaFolders?.sort(
      (a, b) => a.area.label.localeCompare(b.area.label)
    );
  const indicators = areaFolders?.flatMap((area) =>
    area.parameterFolders.flatMap((parameter) =>
      parameter.indicatorFolders.flatMap((indicator) => indicator.evidenceFiles)
    )
  );
  const instrument = await getInstrumentStructureById(
    surveyVisitStructure?.phaseOneRequirements.instrumentId!
  );
  const weightedTotal = instrument?.area.reduce(
    (sum, area) => (sum += area.weight),
    0
  );
  areaFolders?.forEach((areaFolder) => {
    const area = areaFolder.area;
    areaFolder.area.weight = (area.weight / weightedTotal!) * 100;
  });
  const ratings = indicators
    ?.map((indicator) =>
      indicator.ratings.find((rating) => rating.type === "EXTERNAL")
    )
    .filter((rating) => rating);
  const complete =
    ratings?.length === indicators?.length &&
    areaFolders?.every(
      (area) =>
        area.strengths.find((strength) => strength.type === "ACTUAL_SURVEY") &&
        area.weaknesses.find((weakness) => weakness.type === "ACTUAL_SURVEY")
    );
  const surveyVisitEnded =
    surveyVisitStructure?.actualSurveyStatus === "COMPLETE";
  const programHead = program?.programHead;
  const accreditors = await getUsersByRole(Role.ACCREDITOR);
  const surveyVisit = await getSurveyVisitById(id);
  const externalSurveyTeam = surveyVisit?.surveyTeam.find(
    (team) => team.type === "EXTERNAL"
  );
  const isCoordinator = user.id === externalSurveyTeam?.teamLeadId;
  const isAdmin = user.role === "ADMIN";
  const endSurveyIsVisible =
    complete && !surveyVisitEnded && (isCoordinator || isAdmin);
  const accreditationId = surveyVisitStructure?.accreditationId;
  const surveyType = surveyVisit?.type;
  const surveyResultStatus = surveyVisit?.surveyResultStatus;
  const activities = await getActivitiesBySurveyVisitId(
    id,
    AuditEntity.ACTUAL_SURVEY
  );
  return (
    <ScrollArea className="h-full">
      <div className="flex flex-col gap-5 max-w-5/6 mx-auto my-10">
        {isCoordinator && user.role === "ACCREDITOR" && (
          <Alert className="bg-blue-500/5 border-blue-500 text-blue-500">
            <Info />
            <AlertTitle>
              You are assigned as external coordinator for this survey visit
            </AlertTitle>
          </Alert>
        )}
        <p className="flex items-center gap-2 text-2xl">
          <SearchCheck />
          Actual Survey
        </p>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p className="text-2xl">
                  {formatAccreditationName(program?.code!, level!)}
                </p>
                {surveyType === "REVISIT" && (
                  <p className="text-2xl text-muted-foreground">(Revisit)</p>
                )}
              </div>
              {surveyResultStatus === "GRANTED" ? (
                level?.rank === 4 || level?.rank === 2 ? (
                  <div className="text-green-500 flex items-center gap-2 text-md">
                    <CheckCircle2 size={15} />
                    <p>
                      Qualified for{" "}
                      {formatAccreditationName(program?.code!, level!).replace(
                        "1",
                        "2"
                      )}
                    </p>
                  </div>
                ) : (
                  <div className="text-yellow-500 flex items-center gap-2 text-md">
                    <Award />
                    <p>Grandted</p>
                  </div>
                )
              ) : surveyResultStatus === "DEFERRED" ? (
                <div className="text-muted-foreground flex items-center gap-2 text-md">
                  <CircleSlash size={15} />
                  <p>Deferred</p>
                </div>
              ) : surveyResultStatus === "NOT_GRANTED" ? (
                <div className="text-red-600 flex items-center gap-2 text-md">
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
                  "py-2 px-3 dark:border-2 border rounded-md flex items-center gap-2",
                  {
                    "bg-green-400/5 text-green-600 border-green-400": complete,
                    "bg-blue-500/5 text-blue-500 border-blue-500": !complete,
                  }
                )}
              >
                <CircleDot size={15} />
                {complete ? "Rating Complete" : "On Going"}
              </p>
              {surveyVisitEnded && (
                <p className="py-2 px-3 dark:border-2 border rounded-md flex items-center gap-2 text-muted-foreground">
                  <Check size={15} />
                  Survey Ended
                </p>
              )}
            </div>
            <div className="flex items-center gap-2">
              {endSurveyIsVisible && <EndSurveyButton surveyVisitId={id} />}
              <SurveyTeam
                programHead={programHead as User}
                accreditors={accreditors}
                surveyTeam={externalSurveyTeam as SurveyTeamSchema}
              />
            </div>
          </CardFooter>
        </Card>
        <Tabs defaultValue="area">
          <TabsList className="bg-background border">
            <TabsTrigger value="area">Area Ratings</TabsTrigger>
            <TabsTrigger value="activities">Activity Log</TabsTrigger>
            {surveyVisitEnded && (
              <>
                <TabsTrigger value="results">
                  Overall Survey Results
                </TabsTrigger>
                <TabsTrigger value="next">Next Steps</TabsTrigger>
              </>
            )}
          </TabsList>
          <TabsContent value="area">
            <Card className="bg-background">
              <CardContent>
                <DataTable
                  columns={columns}
                  data={(areaFolders as unknown as AreaFolderDTO[]) || []}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="activities">
            <Card className="bg-background">
              <CardContent>
                <ActivityDataTable
                  columns={activityColumns}
                  data={(activities as unknown as ActivityDTO[]) || []}
                />
              </CardContent>
            </Card>
          </TabsContent>
          {surveyVisitEnded && (
            <>
              <TabsContent value="results">
                <SurveyResults
                  areaFolders={areaFolders as unknown as AreaFolderDTO[]}
                  level={level as unknown as Level}
                  surveyType={SurveyTeamType.EXTERNAL}
                />
              </TabsContent>
              <TabsContent value="next">
                <NextSteps
                  level={level}
                  areaFolders={areaFolders as unknown as AreaFolderDTO[]}
                  program={program!}
                  accreditationId={accreditationId}
                  surveyResultStatus={surveyResultStatus!}
                />
              </TabsContent>
            </>
          )}
        </Tabs>
      </div>
    </ScrollArea>
  );
};

export default ActualSurveyPage;
