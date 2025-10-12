import { columns } from "@/components/admin/parameter/columns";
import { DataTable } from "@/components/admin/parameter/data-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getParameterFolderById } from "@/lib/dal/parameter-folder";
import { Category, EvidenceFile, FileStatus } from "@/lib/generated/prisma";
import { ClipboardList } from "lucide-react";

const ParameterFolderPage = async ({
  params,
}: {
  params: Promise<{ parameterId: string }>;
}) => {
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
            this.evidenceFiles.length) *
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
