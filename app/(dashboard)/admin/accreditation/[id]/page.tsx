import { columns } from "@/components/admin/accreditation/columns";
import { DataTable } from "@/components/admin/accreditation/data-table";
import MarkAsCompleteButton from "@/components/admin/parameter/mark-as-complete";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { verifySession } from "@/lib/action/session";
import { getSurveyVisitStructureById } from "@/lib/dal/survey-visit";
import { AreaFolderDTO } from "@/lib/dto/accreditation-instrument";
import { Progress } from "@/lib/generated/prisma";
import { formatAccreditationName, screamingSnakeToTitle } from "@/lib/utils";
import clsx from "clsx";
import { BadgeCheck, CircleDot } from "lucide-react";

const ProgramAccreditationPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { user } = await verifySession();
  const surveyVisitStructure = await getSurveyVisitStructureById(id);
  const level = surveyVisitStructure?.level;
  const program = surveyVisitStructure?.accreditation.program;
  const areaFolders =
    surveyVisitStructure?.phaseOneRequirements?.instrumentFolder?.areaFolders.sort(
      (a, b) => a.area.label.localeCompare(b.area.label)
    );
  const isAdmin = user.role === "ADMIN";
  const isProgramHead = user.id === program?.programHead?.id;
  const marksAsCompleteVisible =
    areaFolders?.every((area) => area.status === "COMPLETE") &&
    surveyVisitStructure?.status !== "COMPLETE" &&
    (isProgramHead || isAdmin);
  return (
    <div className="max-w-5/6 mx-auto my-10 flex flex-col gap-5">
      <p className="text-2xl flex items-center gap-2">
        <BadgeCheck />
        Accreditation
      </p>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{`${formatAccreditationName(
            program?.code!,
            level!
          )}`}</CardTitle>
          <CardDescription>{program?.name}</CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p
              className={clsx(
                "py-2 px-3 border-2 rounded-md flex items-center gap-2",
                {
                  "bg-yellow-400/5 text-yellow-600 border-yellow-400":
                    surveyVisitStructure?.status === Progress.IN_PROGRESS,
                  "bg-green-400/5 text-green-600 border-green-400":
                    surveyVisitStructure?.status === Progress.COMPLETE,
                }
              )}
            >
              <CircleDot size={15} />
              {screamingSnakeToTitle(String(surveyVisitStructure?.status!))}
            </p>
            {marksAsCompleteVisible && (
              <MarkAsCompleteButton surveyVisitId={surveyVisitStructure?.id} />
            )}
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">Open Self Survey</p>
            <Switch />
          </div>
        </CardFooter>
      </Card>
      <Card className="bg-background">
        <CardContent>
          <DataTable
            columns={columns}
            data={(areaFolders as unknown as AreaFolderDTO[]) || []}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgramAccreditationPage;
