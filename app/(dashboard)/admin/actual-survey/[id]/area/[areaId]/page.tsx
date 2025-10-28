import Accreditors from "@/components/admin/accreditation/accreditors";
import { columns } from "@/components/admin/actual-survey/area/columns";
import { DataTable } from "@/components/admin/area/data-table";
import RecommendationsForm from "@/components/admin/area/recommendations-form";
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
import { getAreaFolderById } from "@/lib/dal/area-folder";
import { getSurveyVisitById } from "@/lib/dal/survey-visit";
import { getUsersByRole } from "@/lib/dal/user";
import { ParameterFolderDTO } from "@/lib/dto/accreditation-instrument";
import { Role } from "@/lib/generated/prisma";
import clsx from "clsx";
import {
  Check,
  CircleDot,
  Layers,
  MessageCircleMore,
  TrendingDown,
  TrendingUp,
  X,
} from "lucide-react";

const AreaPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ areaId: string; id: string }>;
  searchParams: Promise<{ ["self-survey"]: string }>;
}) => {
  const { areaId, id } = await params;
  const session = await verifySession();
  const user = session.user;
  const areaFolder = await getAreaFolderById(areaId);
  const area = areaFolder?.area;
  const query = await searchParams;
  const indicators = areaFolder?.parameterFolders.flatMap((parameter) =>
    parameter.indicatorFolders.flatMap((folder) =>
      folder.evidenceFiles.map((evidence) => evidence)
    )
  );
  const ratings = indicators
    ?.map((indicator) =>
      indicator.ratings.find((rating) => rating.type === "EXTERNAL")
    )
    .filter((rating) => rating);
  const recommendation = areaFolder?.recommendations.find(
    (recommendation) => recommendation.type === "ACTUAL_SURVEY"
  );
  const strengths = areaFolder?.strengths.find(
    (strength) => strength.type === "ACTUAL_SURVEY"
  );
  const weaknesses = areaFolder?.weaknesses.find(
    (weaknesses) => weaknesses.type === "ACTUAL_SURVEY"
  );
  const complete =
    ratings?.length === indicators?.length && strengths && weaknesses;
  const parameters = areaFolder?.parameterFolders.sort((a, b) =>
    a.parameter.label.localeCompare(b.parameter.label)
  );
  const accreditors = await getUsersByRole(Role.ACCREDITOR);
  const surveyVisit = await getSurveyVisitById(id);
  const surveyStatus = surveyVisit?.actualSurveyStatus;
  return (
    <ScrollArea className="h-full">
      <div className="max-w-5/6 flex flex-col gap-5 mx-auto my-10">
        <p className="text-2xl flex items-center gap-2">
          <Layers />
          Area
        </p>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              {`${area?.label}: ${area?.description}`}
            </CardTitle>
            <CardDescription className="text-md">
              {query["self-survey"]}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex items-cente justify-between">
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
            <Accreditors
              accreditors={accreditors}
              surveyVisit={surveyVisit}
              areaFolderId={areaFolder?.id}
            />
          </CardFooter>
        </Card>
        <Tabs defaultValue="ratings">
          <TabsList className="bg-background border">
            <TabsTrigger value="ratings">Parameter Ratings</TabsTrigger>
            <TabsTrigger value="strengths">
              {!strengths ? (
                <X className="text-red-500" />
              ) : (
                <Check className="text-green-500" />
              )}
              Strengths
            </TabsTrigger>
            <TabsTrigger value="weaknesses">
              {!weaknesses ? (
                <X className="text-red-500" />
              ) : (
                <Check className="text-green-500" />
              )}
              Weaknesses
            </TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>
          <TabsContent value="ratings">
            <Card className="bg-background">
              <CardContent>
                <DataTable
                  columns={columns}
                  data={(parameters as unknown as ParameterFolderDTO[]) || []}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="strengths">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp size={20} />
                  Area Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RecommendationsForm
                  user={user}
                  strongFolderId={areaFolder?.id}
                  defaultContent={strengths?.content}
                  surveyStatus={surveyStatus!}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="weaknesses">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingDown size={20} />
                  Area Weaknesses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RecommendationsForm
                  user={user}
                  weakFolderId={areaFolder?.id}
                  defaultContent={weaknesses?.content}
                  surveyStatus={surveyStatus!}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="recommendations">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircleMore size={20} />
                  Area Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RecommendationsForm
                  user={user}
                  recommendedFolderId={areaFolder?.id}
                  defaultContent={recommendation?.content}
                  surveyStatus={surveyStatus!}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
};

export default AreaPage;
