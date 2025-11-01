import CreateProgramDialog from "@/components/admin/program/create-program-dialog";
import ProgramPersonnelList from "@/components/admin/program/program-personell-list";
import ProgramsCards from "@/components/admin/program/programs-cards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getPrograms } from "@/lib/dal/program";
import { getUsersByRole } from "@/lib/dal/user";
import { Role } from "@/lib/generated/prisma";
import { Landmark } from "lucide-react";

const ProgramsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ id: string }>;
}) => {
  const params = await searchParams;
  const programs = await getPrograms();
  const education = programs.filter(
    (program) => program.department === "Education"
  );
  const technology = programs.filter(
    (program) => program.department === "Technology"
  );
  const accreditationOfficers = await getUsersByRole(
    Role.ACCREDITATION_OFFICER
  );
  return (
    <div className="max-w-3/4 mx-auto my-10">
      <div className="flex justify-between items-center mb-10">
        <p className="text-3xl flex items-center gap-2">
          <Landmark />
          Programs
        </p>
        <CreateProgramDialog />
      </div>
      <Tabs defaultValue="technology">
        <TabsList className="bg-background border">
          <TabsTrigger value="technology">Technology</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        <TabsContent value="technology">
          <ProgramsCards programs={technology}>
            <ProgramPersonnelList
              params={params}
              accreditationOfficers={accreditationOfficers}
            />
          </ProgramsCards>
        </TabsContent>
        <TabsContent value="education">
          <ProgramsCards programs={education}>
            <ProgramPersonnelList
              params={params}
              accreditationOfficers={accreditationOfficers}
            />
          </ProgramsCards>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProgramsPage;
