import { UsersDTO } from "@/lib/dto/user";
import AddProgramPersonnelForm from "./add-program-personnell-form";

const ProgramPersonnelList = ({
  params,
  accreditationOfficers,
}: {
  params: { id: string };
  accreditationOfficers: UsersDTO[] | null;
}) => {
  return (
    <div>
      <p>{params.id}</p>
      <AddProgramPersonnelForm
        programId={params.id}
        accreditationOfficers={accreditationOfficers}
      />
    </div>
  );
};

export default ProgramPersonnelList;
