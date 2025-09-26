import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { PhaseOneInstrumentDTO } from "@/lib/dto/phase-one-instrument";
import FileTreePhaseOne from "./file-tree-phase-one";

const AccreditationSidebar = async ({
  instrumentFolder,
}: {
  instrumentFolder: PhaseOneInstrumentDTO | null | undefined;
}) => {
  return (
    <Sidebar
      collapsible="none"
      className="border-r overflow-auto w-[300px] flex flex-col"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Areas</SidebarGroupLabel>
          <SidebarMenu>
            {instrumentFolder?.areaFolders.map((area) => (
              <FileTreePhaseOne key={area.id} item={area} />
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AccreditationSidebar;
