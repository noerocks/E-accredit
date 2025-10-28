import Banner from "@/components/admin/accreditation/banner";
import { columns } from "@/components/admin/area-file/columns";
import { DataTable } from "@/components/admin/area-file/data-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  getAreaFolderById,
  getPhaseTwoAreaFolderById,
} from "@/lib/dal/area-folder";
import { AreaFileDTO } from "@/lib/dto/accreditation-instrument";
import { Progress } from "@/lib/generated/prisma";
import { screamingSnakeToTitle } from "@/lib/utils";
import clsx from "clsx";
import { CircleDot, Layers } from "lucide-react";

const PhaseTwoAreaPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string; areaId: string }>;
  searchParams: Promise<{ ["phase-two"]: string }>;
}) => {
  const { id, areaId } = await params;
  const query = await searchParams;
  const areaFolder = await getPhaseTwoAreaFolderById(areaId);
  const area = areaFolder?.area;
  const complete = areaFolder?.areaFiles.every(
    (file) => file.status === "SUBMITTED"
  );
  const areaFiles = areaFolder?.areaFiles;
  return (
    <ScrollArea className="h-full">
      <Banner surveyVisitId={id} />
      <div className="max-w-5/6 mx-auto my-10 flex flex-col gap-5">
        <p className="text-2xl flex items-center gap-2">
          <Layers />
          Area
        </p>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">{`${area?.label}: ${area?.description}`}</CardTitle>
            <CardDescription className="text-md">
              {query["phase-two"]}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <p
                className={clsx(
                  "py-2 px-3 border-2 rounded-md flex items-center gap-2",
                  {
                    "bg-yellow-400/5 text-yellow-600 border-yellow-400":
                      !complete,
                    "bg-green-400/5 text-green-600 border-green-400": complete,
                  }
                )}
              >
                <CircleDot size={15} />
                {complete ? "Complete" : "In Progress"}
              </p>
            </div>
          </CardFooter>
        </Card>
        <Card className="bg-background">
          <CardContent>
            <DataTable
              columns={columns}
              data={(areaFiles as unknown as AreaFileDTO[]) || []}
            />
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  );
};

export default PhaseTwoAreaPage;
