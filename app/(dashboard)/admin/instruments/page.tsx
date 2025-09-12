import CreateInstrumentDialog from "@/components/admin/instruments/create-instrument-dialog";

const IntrumentsPage = () => {
  return (
    <div className="max-w-3/4 mx-auto mt-10">
      <div className="flex justify-between items-center">
        <p className="text-3xl">Instruments</p>
        <CreateInstrumentDialog />
      </div>
    </div>
  );
};

export default IntrumentsPage;
