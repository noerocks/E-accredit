"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  PhaseOneInstrumentDTO,
  PhaseTwoInstrumentDTO,
} from "@/lib/dto/accreditation-instrument";
import FileTree from "./file-tree";
import React from "react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FolderCheckIcon, Home } from "lucide-react";
import Link from "next/link";

const AccreditationSidebar = ({
  instrumentFolder,
  phaseTwoFolder,
}: {
  instrumentFolder: PhaseOneInstrumentDTO | null | undefined;
  phaseTwoFolder: PhaseTwoInstrumentDTO | null | undefined;
}) => {
  const pathName = usePathname();
  const base = pathName
    .split("/")
    .filter((segment) => segment !== "")
    .slice(0, 3);
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const onDoubleClick = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement;
    const button = target.closest<HTMLButtonElement>("[data-id]");
    if (!button || target.tagName !== "BUTTON") return null;
    const { id, type } = button.dataset;
    router.replace(
      `/${base.join("/")}/${type}/${id}?${searchParams.toString()}`
    );
  };
  return (
    <Sidebar
      collapsible="none"
      className="border-r overflow-auto w-[300px] flex flex-col bg-background"
    >
      <SidebarHeader className="border-b">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-transparent active:bg-transparent">
              <FolderCheckIcon />
              File Explorer
            </SidebarMenuButton>
            <SidebarMenuAction asChild>
              <Link href={`/${base.join("/")}?${searchParams.toString()}`}>
                <Home />
              </Link>
            </SidebarMenuAction>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="h-full">
          <SidebarGroup>
            <SidebarGroupLabel>Areas</SidebarGroupLabel>
            <SidebarMenu onDoubleClick={onDoubleClick}>
              {instrumentFolder &&
                instrumentFolder.areaFolders
                  .sort((a, b) => a.area.label.localeCompare(b.area.label))
                  .map((area) => <FileTree key={area.id} item={area} />)}
              {phaseTwoFolder &&
                phaseTwoFolder.phaseTwoAreaFolders.map((area) => (
                  <FileTree key={area.id} item={area} />
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
