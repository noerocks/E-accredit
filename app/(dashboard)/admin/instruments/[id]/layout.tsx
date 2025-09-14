import InstrumentSidebar from "@/components/admin/instruments/instrument-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
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
      <SidebarInset>
        <div className="flex-1 h-full bg-muted overflow-auto">{children}</div>
      </SidebarInset>
    </div>
  );
};

export default InstrumentLayout;
