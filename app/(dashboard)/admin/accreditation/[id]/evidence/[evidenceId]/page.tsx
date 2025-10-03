import UploadFileForm from "@/components/admin/evidence-file/upload-file-form";
import VersionHistory from "@/components/admin/evidence-file/version-history";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getEvidenceFileById } from "@/lib/dal/evidence";
import { Category, EvidenceStatus } from "@/lib/generated/prisma";
import clsx from "clsx";
import { CheckCircle, CircleDot, Tag } from "lucide-react";

const EvidencePage = async ({
  params,
}: {
  params: Promise<{ evidenceId: string }>;
}) => {
  const { evidenceId } = await params;
  const evidence = await getEvidenceFileById(evidenceId);
  const indicator = evidence?.indicator;
  const parameter = evidence?.indicatorFolder.parameterFolder.parameter;
  const formattedCategory = {
    [Category.SYSTEM]: "System",
    [Category.IMPLEMENTATION]: "Implementation",
    [Category.OUTCOME]: "Outcome/s",
  };
  const formatStatus = (status: EvidenceStatus) => {
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
          <CheckCircle />
          Indicator
        </p>
        <Card>
          <CardHeader>
            <CardTitle>
              <p className="text-3xl">
                {`${indicator?.label}: ${indicator?.description}`}
              </p>
            </CardTitle>
            <CardDescription className="text-lg">
              {`${parameter?.label}: ${parameter?.description}`}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <div className="flex items-center gap-2">
              <p
                className={clsx(
                  "py-2 px-3 border-2 rounded-md flex items-center gap-2",
                  {
                    "bg-yellow-400/5 text-yellow-400 border-yellow-400":
                      evidence?.status === "FOR_REVIEW",
                    "bg-green-400/5 text-green-400 border-green-400":
                      evidence?.status === "ACCEPTED",
                    "bg-red-400/5 text-red-400 border-red-400":
                      evidence?.status === "REJECTED",
                  }
                )}
              >
                <CircleDot size={15} />
                {formatStatus(evidence?.status!)}
              </p>
              <p className="py-2 px-3 border-2 rounded-md flex items-center gap-2">
                <Tag size={15} />
                {formattedCategory[indicator?.category!]}
              </p>
            </div>
            <UploadFileForm indicator={indicator} evidenceFileId={evidenceId} />
          </CardFooter>
        </Card>
        {evidence?.fileVersions && (
          <VersionHistory
            fileId={evidenceId}
            versions={evidence?.fileVersions}
            fileType="Evidence"
          />
        )}
      </div>
    </ScrollArea>
  );
};

export default EvidencePage;
