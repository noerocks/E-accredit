import CreateAccreditationDialog from "@/components/admin/accreditation/createAccreditationDialog";
import { getInstruments } from "@/lib/dal/instrument";
import { getPrograms } from "@/lib/dal/program";

const Accreditation = async () => {
  const programs = await getPrograms();
  const instruments = await getInstruments();
  return (
    <div className="max-w-3/4 mx-auto mt-10">
      <div className="flex justify-between items-center mb-10">
        <p className="text-3xl">Program Accreditations</p>
        <CreateAccreditationDialog
          programs={programs}
          instruments={instruments}
        />
      </div>
    </div>
  );
};

export default Accreditation;
