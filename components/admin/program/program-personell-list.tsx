import { UsersDTO } from "@/lib/dto/user";
import AddProgramPersonnelForm from "./add-program-personnell-form";
import { getProgramPersonnelByProgramId } from "@/lib/dal/program-personnel";
import ProgramPersonnel from "./program-personnel";

const ProgramPersonnelList = async ({
  params,
  accreditationOfficers,
}: {
  params: { id: string };
  accreditationOfficers: UsersDTO[] | null;
}) => {
  const programPersonnel = await getProgramPersonnelByProgramId(params.id);
  return (
    <div className="flex flex-col gap-5">
      {programPersonnel && programPersonnel.length > 0 && (
        <ProgramPersonnel programPersonnel={programPersonnel} />
      )}
      <AddProgramPersonnelForm
        programId={params.id}
        accreditationOfficers={accreditationOfficers}
      />
    </div>
  );
};

export default ProgramPersonnelList;
