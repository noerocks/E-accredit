import TaskForce from "@/components/admin/accreditation/taskforce";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getAreaFolderById } from "@/lib/dal/area-folder";
import { Progress } from "@/lib/generated/prisma";
import clsx from "clsx";
import { CircleDot, Layers, Users } from "lucide-react";

const AreaFolderPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ areaId: string }>;
  searchParams: Promise<{ accreditation: string }>;
}) => {
  const { areaId } = await params;
  const { accreditation } = await searchParams;
  const areaFolder = await getAreaFolderById(areaId);
  const area = areaFolder?.area;
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
      <div className="max-w-3/4 mx-auto my-10 flex flex-col gap-5">
        <p className="text-2xl flex items-center gap-2">
          <Layers />
          Area
        </p>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{`${area?.label}: ${area?.description}`}</CardTitle>
            <CardDescription className="text-lg">
              {accreditation}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between items-center">
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
            <TaskForce />
          </CardFooter>
        </Card>
      </div>
    </ScrollArea>
  );
};

export default AreaFolderPage;
