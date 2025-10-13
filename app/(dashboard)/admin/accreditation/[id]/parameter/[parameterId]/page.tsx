import { columns } from "@/components/admin/parameter/columns";
import { DataTable } from "@/components/admin/parameter/data-table";
import MarkAsCompleteButton from "@/components/admin/parameter/mark-as-complete";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { verifySession } from "@/lib/action/session";
import { getParameterFolderById } from "@/lib/dal/parameter-folder";
import {
  Category,
  EvidenceFile,
  FileStatus,
  Progress as ProgressEnum,
} from "@/lib/generated/prisma";
import clsx from "clsx";
import { CheckCircle2, CircleDot, ClipboardList } from "lucide-react";

const ParameterFolderPage = async ({
  params,
}: {
  params: Promise<{ parameterId: string }>;
}) => {
  const { user } = await verifySession();
  const { parameterId } = await params;
  const parameterFolder = await getParameterFolderById(parameterId);
  type CategoryReport = {
    category: Category;
    evidenceFiles: EvidenceFile[];
    submittedFiles: EvidenceFile[];
    getCompliedPercentage: () => number;
    getPercentageByStatus: (status: FileStatus) => number;
  };
  const allEvidenceFiles = parameterFolder?.indicatorFolders.flatMap(
    (folder) => folder.evidenceFiles
  );
  const isChairperson =
    user.id === parameterFolder?.areaFolder.taskForce?.chairPerson?.userId;
  const isAdmin = user.role === "ADMIN";
  const report = Object.values(Category).reduce((categories, category) => {
    const evidenceFiles =
      parameterFolder?.indicatorFolders.find(
        (folder) => folder.category === category
      )?.evidenceFiles || [];
    categories.push({
      category,
      evidenceFiles,
      submittedFiles: evidenceFiles.filter(
        (file) => file.fileVersions.length >= 1
      ),
      getCompliedPercentage: function () {
        return (this.submittedFiles.length / this.evidenceFiles.length) * 100;
      },
      getPercentageByStatus: function (status) {
        return (
          (this.submittedFiles.filter((file) => file.status === status).length /
            this.submittedFiles.length) *
            100 || 0
        );
      },
    });
    return categories;
  }, [] as CategoryReport[]);
  return (
    <ScrollArea className="h-full">
      <div className="max-w-3/4 mx-auto my-10 flex flex-col gap-5">
        <p className="text-2xl flex items-center gap-2">
          <ClipboardList />
          Parameter
        </p>
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">{`${parameterFolder?.parameter?.label}: ${parameterFolder?.parameter?.description}`}</CardTitle>
            <CardDescription className="text-lg">
              {`${parameterFolder?.parameter.area?.label}: ${parameterFolder?.parameter.area?.description}`}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between items-center">
            <p
              className={clsx(
                "py-2 px-3 border-2 rounded-md flex items-center gap-2",
                {
                  "bg-yellow-400/5 text-yellow-600 border-yellow-400":
                    parameterFolder?.status === ProgressEnum.IN_PROGRESS,
                  "bg-green-400/5 text-green-600 border-green-400":
                    parameterFolder?.status === ProgressEnum.COMPLETE,
                }
              )}
            >
              <CircleDot size={15} />
              {parameterFolder?.status
                .split("_")
                .map(
                  (word) =>
                    word[0].toLocaleUpperCase() +
                    word.slice(1).toLocaleLowerCase()
                )
                .join(" ")}
            </p>
            {(isChairperson || isAdmin) && (
              <MarkAsCompleteButton parameterFolderId={parameterFolder?.id} />
            )}
          </CardFooter>
        </Card>
        <p className="text-lg">Progress</p>
        <div className="flex items-center gap-2">
          {report.map((report) => (
            <Card key={report.category} className="flex-1 bg-background">
              <CardHeader>
                <CardTitle>
                  {report.category[0].toUpperCase() +
                    report.category.slice(1).toLocaleLowerCase()}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2 mb-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Submitted Files
                    </p>
                    <p className="text-sm text-muted-foreground">{`${report.submittedFiles?.length}/${report.evidenceFiles?.length}`}</p>
                  </div>
                  <Progress value={report.getCompliedPercentage()} />
                </div>
                <div className="flex flex-col gap-2">
                  {Object.values(FileStatus)
                    .filter(
                      (status) =>
                        status !== FileStatus.EMPTY &&
                        status !== FileStatus.SUBMITTED
                    )
                    .sort()
                    .map((status) => (
                      <div className="flex flex-col gap-2" key={status}>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-muted-foreground">
                            {status
                              .split("_")
                              .map(
                                (word) =>
                                  word[0].toUpperCase() +
                                  word.slice(1).toLowerCase()
                              )
                              .join(" ")}
                          </p>
                          <p className="text-sm text-muted-foreground">{`${report.getPercentageByStatus(
                            status
                          )}%`}</p>
                        </div>
                        <Progress
                          value={report.getPercentageByStatus(status)}
                        />
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="bg-background">
          <CardContent>
            <DataTable columns={columns} data={allEvidenceFiles || []} />
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  );
};

export default ParameterFolderPage;
