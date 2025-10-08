import { UsersDTO } from "@/lib/dto/user";
import AddProgramPersonnelForm from "./add-program-personnell-form";
import { getProgramPersonnelByProgramId } from "@/lib/dal/program-personnel";
import ProgramPersonnel from "./program-personnel";
import AssignProgramHead from "./assignProgramHead";
import { getProgramById } from "@/lib/dal/program";

const ProgramPersonnelList = async ({
  params,
  accreditationOfficers,
}: {
  params: { id: string };
  accreditationOfficers: UsersDTO[] | null;
}) => {
  const programPersonnel = await getProgramPersonnelByProgramId(params.id);
  const program = await getProgramById(params.id);
  return (
    <div className="flex flex-col gap-5">
      <AssignProgramHead
        programId={params.id}
        accreditationOfficers={accreditationOfficers}
        programHeadUserId={program?.programHead?.id}
        programPersonnel={programPersonnel}
      />
      {programPersonnel && programPersonnel.length > 0 && (
        <ProgramPersonnel programPersonnel={programPersonnel} />
      )}
      <AddProgramPersonnelForm
        programId={params.id}
        accreditationOfficers={accreditationOfficers}
        programHeadUserId={program?.programHead?.id}
      />
    </div>
  );
};

export default ProgramPersonnelList;
