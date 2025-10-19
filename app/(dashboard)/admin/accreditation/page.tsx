import AccreditationCards from "@/components/admin/accreditation/accreditation-cards";
import CreateAccreditationDialog from "@/components/admin/accreditation/createAccreditationDialog";
import { getAccreditations } from "@/lib/dal/accreditation";
import { getInstruments } from "@/lib/dal/instrument";
import { getLevels } from "@/lib/dal/levels";
import { getPrograms } from "@/lib/dal/program";
import { FileArchive } from "lucide-react";

const Accreditation = async () => {
  const programs = await getPrograms();
  const instruments = await getInstruments();
  const levels = await getLevels();
  const accreditations = await getAccreditations();
  return (
    <div className="max-w-3/4 mx-auto mt-10">
      <div className="flex justify-between items-center mb-10">
        <p className="text-3xl flex items-center gap-2">
          <FileArchive />
          Survey Visit Portfolios
        </p>
        <CreateAccreditationDialog
          programs={programs}
          instruments={instruments}
          levels={levels}
        />
      </div>
      <AccreditationCards accreditations={accreditations} />
    </div>
  );
};

export default Accreditation;
