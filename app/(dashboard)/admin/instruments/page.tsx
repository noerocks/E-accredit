import CreateInstrumentDialog from "@/components/admin/instruments/create-instrument-dialog";
import InstrumentCards from "@/components/admin/instruments/instruments-cards";
import { getInstruments } from "@/lib/dal/instrument";
import { ClipboardCheck } from "lucide-react";

const IntrumentsPage = async () => {
  const instruments = await getInstruments();
  return (
    <div className="max-w-3/4 mx-auto mt-10">
      <div className="flex justify-between items-center mb-10">
        <p className="text-3xl flex items-center gap-2">
          <ClipboardCheck /> Instruments
        </p>
        <CreateInstrumentDialog />
      </div>
      <InstrumentCards instruments={instruments} />
    </div>
  );
};

export default IntrumentsPage;
