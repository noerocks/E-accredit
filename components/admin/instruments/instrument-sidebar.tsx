"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import FileTree from "@/components/admin/instruments/file-tree";
import { InstrumentDTO } from "@/lib/dto/instrument";
import CreateAreaDialog from "@/components/admin/area/create-area-dialog";
import { useSearchParams, useRouter, useParams } from "next/navigation";
import { Home, Settings } from "lucide-react";
import Link from "next/link";
import CreateParameterDialog from "@/components/admin/parameter/create-parameter-dialog";
import CreateIndicatorDialog from "@/components/admin/indicator/create-indicator-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const InstrumentSidebar = ({
  instrument,
}: {
  instrument: InstrumentDTO | null;
}) => {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const onDoubleClick = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement;
    const button = target.closest<HTMLButtonElement>("[data-type]");
    if (!button || target.tagName !== "BUTTON") return null;
    const { id, type } = button.dataset;
    router.replace(
      `/admin/instruments/${String(params.id)}/${type}${
        id ? `/${id}` : ""
      }?${searchParams.toString()}`
    );
  };
  return (
    <Sidebar
      collapsible="none"
      className="border-r overflow-auto w-[3  00px] flex flex-col bg-background"
    >
      <SidebarHeader className="border-b">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-transparent active:bg-transparent flex gap-2">
              {params.areaId ? (
                <>
                  <CreateParameterDialog />
                  <Settings />
                </>
              ) : params.parameterId ? (
                <>
                  <CreateIndicatorDialog />
                  <Settings />
                </>
              ) : null}
            </SidebarMenuButton>
            <SidebarMenuAction asChild>
              <Link
                href={`/admin/instruments/${
                  params.id
                }?${searchParams.toString()}`}
              >
                <Home />
              </Link>
            </SidebarMenuAction>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="h-full">
          <SidebarGroup>
            <SidebarGroupLabel>Documents</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu onDoubleClick={onDoubleClick}>
                <SidebarMenuItem>
                  <SidebarMenuButton data-type={"pdf"}>
                    📄 PDF File
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Areas</SidebarGroupLabel>
            <CreateAreaDialog />
            <SidebarGroupContent>
              <SidebarMenu onDoubleClick={onDoubleClick}>
                {instrument?.area
                  .sort((a, b) => a.label.localeCompare(b.label))
                  .map((item, index) => (
                    <FileTree key={index} item={item} />
                  ))}
              </SidebarMenu>
            </SidebarGroupContent>
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

export default InstrumentSidebar;
