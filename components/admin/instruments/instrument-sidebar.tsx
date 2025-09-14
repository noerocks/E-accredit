import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";

import FileTree from "@/components/admin/instruments/file-tree";
import { InstrumentDTO } from "@/lib/dto/instrument";
import CreateAreaDialog from "./create-area-dialog";
const InstrumentSidebar = ({
  instrument,
}: {
  instrument: InstrumentDTO | null;
}) => {
  return (
    <Sidebar collapsible="none" className="border-r overflow-auto w-[300px]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Areas</SidebarGroupLabel>
          <CreateAreaDialog />
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
