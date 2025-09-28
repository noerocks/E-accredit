import UploadFileForm from "@/components/admin/indicator/upload-file-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getEvidenceFileById } from "@/lib/dal/evidence-file";
import { CheckCircle } from "lucide-react";

const EvidencePage = async ({
  params,
}: {
  params: Promise<{ evidenceId: string }>;
}) => {
  const { evidenceId } = await params;
  const evidence = await getEvidenceFileById(evidenceId);
  const indicator = evidence?.indicator;
  const parameter = evidence?.indicatorFolder.parameterFolder.parameter;
  const categories = {
    SYSTEM: "System",
    IMPLEMENTATION: "Implementation",
    OUTCOME: "Outcome/s",
  };
  return (
    <div className="max-w-3/4 mx-auto mt-10 flex flex-col gap-10">
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
          <CardDescription>
            {`${parameter?.label}: ${parameter?.description}`}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <UploadFileForm indicator={indicator} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default EvidencePage;
