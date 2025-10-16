import Accreditors from "@/components/admin/accreditation/accreditors";
import TaskForce from "@/components/admin/accreditation/taskforce";
import { columns as parameterColumns } from "@/components/admin/area/columns";
import { columns as areaFilesColumns } from "@/components/admin/area-file/columns";
import { DataTable as DataTableParameters } from "@/components/admin/area/data-table";
import { DataTable as DataTableAreaFiles } from "@/components/admin/area-file/data-table";
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
import { getProgramheadById } from "@/lib/dal/program";
import { getProgramPersonnelByProgramId } from "@/lib/dal/program-personnel";
import { getSurveyVisitById } from "@/lib/dal/survey-visit";
import { getUsersByRole } from "@/lib/dal/user";
import { Progress, Role } from "@/lib/generated/prisma";
import clsx from "clsx";
import { CircleDot, Layers } from "lucide-react";
import MarkAsCompleteButton from "@/components/admin/parameter/mark-as-complete";
import {
  AreaFileDTO,
  ParameterFolderDTO,
} from "@/lib/dto/accreditation-instrument";
import Banner from "@/components/admin/accreditation/banner";

const AreaFolderPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ areaId: string; id: string }>;
  searchParams: Promise<{ accreditation: string }>;
}) => {
  const session = await verifySession();
  const user = session.user;
  const isAdmin = user.role === "ADMIN";
  const { areaId, id: surveyVisitId } = await params;
  const { accreditation } = await searchParams;
  const areaFolder = await getAreaFolderById(areaId);
  const area = areaFolder?.area;
  const programId =
    areaFolder?.instrumentFolder.phaseOneRequirements?.surveyVisit
      ?.accreditation.programId;
  const programPersonnel = await getProgramPersonnelByProgramId(programId!);
  const program = await getProgramheadById(programId!);
  const isProgramHead = user.id === program?.programHead?.id;
  const accreditors = await getUsersByRole(Role.ACCREDITOR);
  const surveyVisit = await getSurveyVisitById(surveyVisitId);
  const parameterFolders = areaFolder?.parameterFolders.sort((a, b) =>
    a.parameter.label.localeCompare(b.parameter.label)
  );
  const areaFiles = areaFolder?.areaFiles;
  const markAsCompleteVisible =
    areaFolder?.parameterFolders.every(
      (parameter) => parameter.status === "COMPLETE"
    ) &&
    areaFolder.areaFiles.every((file) => file.status === "SUBMITTED") &&
    areaFolder.status !== "COMPLETE" &&
    (isAdmin || isProgramHead);
  const formatStatus = (status: Progress) => {
    return status
      .split("_")
      .map(
        (word) =>
          word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
      )
      .join(" ");
  };
  return (
    <ScrollArea className="h-full">
      <Banner surveyVisitId={surveyVisitId} />
      <div className="max-w-5/6 mx-auto my-10 flex flex-col gap-5">
        <p className="text-2xl flex items-center gap-2">
          <Layers />
          Area
        </p>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">{`${area?.label}: ${area?.description}`}</CardTitle>
            <CardDescription className="text-md">
              {accreditation}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <p
                className={clsx(
                  "py-2 px-3 border-2 rounded-md flex items-center gap-2",
                  {
                    "bg-yellow-400/5 text-yellow-600 border-yellow-400":
                      areaFolder?.status === Progress.IN_PROGRESS,
                    "bg-green-400/5 text-green-600 border-green-400":
                      areaFolder?.status === Progress.COMPLETE,
                  }
                )}
              >
                <CircleDot size={15} />
                {formatStatus(areaFolder?.status!)}
              </p>
              {markAsCompleteVisible && (
                <MarkAsCompleteButton areaFolderId={areaFolder?.id} />
              )}
            </div>
            <div className="flex items-center gap-2">
              <Accreditors
                accreditors={accreditors}
                surveyVisit={surveyVisit}
                areaFolderId={areaFolder?.id}
              />
              <TaskForce
                programPersonnel={programPersonnel}
                taskForce={areaFolder?.taskForce}
                areaFolderId={areaFolder?.id}
                isAdmin={isAdmin}
              />
            </div>
          </CardFooter>
        </Card>
        <Tabs defaultValue="parameters">
          <TabsList className="bg-background border">
            <TabsTrigger value="parameters">Parameters</TabsTrigger>
            <TabsTrigger value="areaFiles">Area Files</TabsTrigger>
          </TabsList>
          <TabsContent value="parameters">
            <Card className="bg-background">
              <CardContent>
                <DataTableParameters
                  columns={parameterColumns}
                  data={
                    (parameterFolders as unknown as ParameterFolderDTO[]) || []
                  }
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="areaFiles">
            <Card className="bg-background">
              <CardContent>
                <DataTableAreaFiles
                  columns={areaFilesColumns}
                  data={(areaFiles as unknown as AreaFileDTO[]) || []}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
};

export default AreaFolderPage;
