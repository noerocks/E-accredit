import { columns } from "@/components/admin/accreditation/columns";
import { DataTable } from "@/components/admin/accreditation/data-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getSurveyVisitStructureById } from "@/lib/dal/survey-visit";
import { BadgeCheck } from "lucide-react";

const ProgramAccreditationPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const surveyVisitStructure = await getSurveyVisitStructureById(id);
  const level = surveyVisitStructure?.level;
  const program = surveyVisitStructure?.accreditation.program;
  const areaFolders =
    surveyVisitStructure?.phaseOneRequirements?.instrumentFolder?.areaFolders.sort(
      (a, b) => a.area.label.localeCompare(b.area.label)
    );
  return (
    <div className="max-w-5/6 mx-auto my-10 flex flex-col gap-5">
      <p className="text-2xl flex items-center gap-2">
        <BadgeCheck />
        Accreditation
      </p>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{`${program?.code} - ${
            level?.label
          } ${
            level?.rank! <= 4
              ? level?.phase
                  .split("_")
                  .map(
                    (word) =>
                      word[0].toUpperCase() + word.slice(1).toLowerCase()
                  )
                  .join(" ")
              : ""
          }`}</CardTitle>
          <CardDescription>{program?.name}</CardDescription>
        </CardHeader>
      </Card>
      <Card className="bg-background">
        <CardContent>
          <DataTable columns={columns} data={areaFolders || []} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgramAccreditationPage;
