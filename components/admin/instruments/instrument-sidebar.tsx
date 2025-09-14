"use client";

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
import CreateAreaDialog from "./create-area-dialog";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
const InstrumentSidebar = ({
  instrument,
}: {
  instrument: InstrumentDTO | null;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  return (
    <Sidebar collapsible="none" className="border-r overflow-auto w-[300px]">
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
                switch (type) {
                  case "area":
                    router.replace(
                      `${
                        pathname.includes("area")
                          ? pathname.slice(0, pathname.indexOf("/area"))
                          : pathname
                      }/area/${id}?${searchParams.toString()}`
                    );
                    break;
                }
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
