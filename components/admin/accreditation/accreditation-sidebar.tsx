"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  PhaseOneInstrumentDTO,
  PhaseTwoInstrumentDTO,
} from "@/lib/dto/accreditation-instrument";
import FileTreePhaseOne from "./file-tree-phase-one";
import React from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

const AccreditationSidebar = ({
  instrumentFolder,
  phaseTwoFolder,
}: {
  instrumentFolder: PhaseOneInstrumentDTO | null | undefined;
  phaseTwoFolder: PhaseTwoInstrumentDTO | null | undefined;
}) => {
  console.log(phaseTwoFolder);
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const onDoubleClick = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement;
    const button = target.closest<HTMLButtonElement>("[data-id]");
    if (!button || target.tagName !== "BUTTON") return null;
    const { id, type } = button.dataset;
    router.replace(
      `/admin/accreditation/${String(
        params.id
      )}/${type}/${id}?${searchParams.toString()}`
    );
  };
  console.log(phaseTwoFolder?.phaseTwoAreaFolders);
  return (
    <Sidebar
      collapsible="none"
      className="border-r overflow-auto w-[300px] flex flex-col bg-background"
    >
      <SidebarHeader className="border-b">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-transparent active:bg-transparent"></SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="h-full">
          <SidebarGroup>
            <SidebarGroupLabel>Areas</SidebarGroupLabel>
            <SidebarMenu onDoubleClick={onDoubleClick}>
              {instrumentFolder &&
                instrumentFolder.areaFolders.map((area) => (
                  <FileTreePhaseOne key={area.id} item={area} />
                ))}
              {phaseTwoFolder &&
                phaseTwoFolder.phaseTwoAreaFolders.map((area) => (
                  <FileTreePhaseOne key={area.id} item={area} />
                ))}
            </SidebarMenu>
          </SidebarGroup>
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-transparent active:bg-transparent"></SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AccreditationSidebar;
