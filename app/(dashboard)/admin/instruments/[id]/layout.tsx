import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

const InstrumentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full">
      <Sidebar collapsible="none" className="bg-muted border-r overflow-auto">
        <SidebarHeader></SidebarHeader>
        <SidebarContent></SidebarContent>
        <SidebarFooter></SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <div className="flex-1 h-full bg-muted overflow-auto">{children}</div>
      </SidebarInset>
    </div>
  );
};

export default InstrumentLayout;
