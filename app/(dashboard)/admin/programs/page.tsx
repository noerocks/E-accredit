import CreateProgramDialog from "@/components/admin/program/create-program-dialog";
import ProgramPersonnelList from "@/components/admin/program/program-personell-list";
import ProgramsCards from "@/components/admin/program/programs-cards";
import { getPrograms } from "@/lib/dal/program";
import { getAccreditationOfficers } from "@/lib/dal/user";

const ProgramsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ id: string }>;
}) => {
  const params = await searchParams;
  const programs = await getPrograms();
  const accreditationOfficers = await getAccreditationOfficers();
  return (
    <div className="max-w-3/4 mx-auto mt-10">
      <div className="flex justify-between items-center mb-10">
        <p className="text-3xl">Programs</p>
        <CreateProgramDialog />
      </div>
      <ProgramsCards programs={programs}>
        <ProgramPersonnelList
          params={params}
          accreditationOfficers={accreditationOfficers}
        />
      </ProgramsCards>
    </div>
  );
};

export default ProgramsPage;
