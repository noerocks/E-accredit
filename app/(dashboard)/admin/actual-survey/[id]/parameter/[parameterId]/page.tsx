import { columns } from "@/components/admin/actual-survey/parameter/columns";
import { DataTable } from "@/components/admin/parameter/data-table";
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
import { getParameterFolderById } from "@/lib/dal/parameter-folder";
import clsx from "clsx";
import { CircleDot, ClipboardList } from "lucide-react";

const ParameterPage = async ({
  params,
}: {
  params: Promise<{ parameterId: string }>;
}) => {
  const { parameterId } = await params;
  const parameterFolder = await getParameterFolderById(parameterId);
  const parameter = parameterFolder?.parameter;
  const area = parameter?.area;
  const indicators = parameterFolder?.indicatorFolders.flatMap(
    (indicator) => indicator.evidenceFiles
  );
  const ratings = indicators
    ?.map((indicator) =>
      indicator.ratings.find((rating) => rating.type === "EXTERNAL")
    )
    .filter((rating) => rating);
  const complete = ratings?.length === indicators?.length;
  const systemIndicators = indicators
    ?.filter((indicator) => indicator.indicator.category === "SYSTEM")
    .sort((a, b) => a.indicator.label.localeCompare(b.indicator.label));
  const implementationIndicators = indicators
    ?.filter((indicator) => indicator.indicator.category === "IMPLEMENTATION")
    .sort((a, b) => a.indicator.label.localeCompare(b.indicator.label));
  const outcomesIndicators = indicators
    ?.filter((indicator) => indicator.indicator.category === "OUTCOME")
    .sort((a, b) => a.indicator.label.localeCompare(b.indicator.label));
  return (
    <ScrollArea className="h-full">
      <div className="max-w-5/6 flex flex-col gap-5 mx-auto my-10">
        <p className="text-2xl flex items-center gap-2">
          <ClipboardList />
          Parameter
        </p>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              {`${parameter?.label}: ${parameter?.description}`}
            </CardTitle>
            <CardDescription className="text-md">
              {`${area?.label}: ${area?.description}`}
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
          </CardFooter>
        </Card>
        <Tabs defaultValue="system">
          <TabsList className="bg-background border">
            <TabsTrigger value="system">System</TabsTrigger>
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
            <TabsTrigger value="outcomes">Outcome/s</TabsTrigger>
          </TabsList>
          <TabsContent value="system">
            <Card className="bg-background">
              <CardContent>
                <DataTable columns={columns} data={systemIndicators || []} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="implementation">
            <Card className="bg-background">
              <CardContent>
                <DataTable
                  columns={columns}
                  data={implementationIndicators || []}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="outcomes">
            <Card className="bg-background">
              <CardContent>
                <DataTable columns={columns} data={outcomesIndicators || []} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
};

export default ParameterPage;
