import InstrumentSidebar from "@/components/admin/instruments/instrument-sidebar";
import { getInstrumentStructureById } from "@/lib/dal/instrument";

const InstrumentLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const instrument = await getInstrumentStructureById(id);
  return (
    <div className="flex h-full">
      <InstrumentSidebar instrument={instrument} />
      <div className="flex-1 h-full overflow-auto">{children}</div>
    </div>
  );
};

export default InstrumentLayout;
