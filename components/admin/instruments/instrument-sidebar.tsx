import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";

import FileTree from "@/components/admin/instruments/file-tree";
import { InstrumentDTO } from "@/lib/dto/instrument";

const InstrumentSidebar = ({
  instrument,
}: {
  instrument: InstrumentDTO | null;
}) => {
  return (
    <Sidebar
      collapsible="none"
      className="bg-muted border-r overflow-auto w-[300px]"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Areas</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {instrument?.area.map((item, index) => (
                <FileTree key={index} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default InstrumentSidebar;
