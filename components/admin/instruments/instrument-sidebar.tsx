"use client";

import {
  Sidebar,
  SidebarContent,
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
import CreateAreaDialog from "./create-area-dialog";
import { useSearchParams, useRouter, useParams } from "next/navigation";
import { Home, Settings } from "lucide-react";
import Link from "next/link";
import CreateParameterDialog from "./create-parameter-dialog";
import CreateIndicatorDialog from "./create-indicator-dialog";

const InstrumentSidebar = ({
  instrument,
}: {
  instrument: InstrumentDTO | null;
}) => {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  return (
    <Sidebar collapsible="none" className="border-r overflow-auto w-[300px]">
      {params.areaId ? (
        <SidebarHeader className="border-b">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="hover:bg-transparent active:bg-transparent flex gap-2">
                <CreateParameterDialog />
                <Settings />
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
      ) : params.parameterId ? (
        <SidebarHeader className="border-b">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="hover:bg-transparent active:bg-transparent flex gap-2">
                <CreateIndicatorDialog />
                <Settings />
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
      ) : null}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Areas</SidebarGroupLabel>
          <CreateAreaDialog />
          <SidebarGroupContent>
            <SidebarMenu
              onDoubleClick={(e) => {
                const target = e.target as HTMLElement;
                const button = target.closest<HTMLButtonElement>("[data-id]");
                if (!button || target.tagName !== "BUTTON") return null;
                const { id, type } = button.dataset;
                router.replace(
                  `/admin/instruments/${String(
                    params.id
                  )}/${type}/${id}?${searchParams.toString()}`
                );
              }}
            >
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
