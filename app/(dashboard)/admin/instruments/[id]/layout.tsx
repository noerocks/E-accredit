"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import { ChevronRight, File, Folder, Plus } from "lucide-react";
import { useParams, useSearchParams } from "next/navigation";
import { Area, Parameter, Indicator, Category } from "@/lib/generated/prisma";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { instrument } from "@/lib/data";

const InstrumentLayout = ({ children }: { children: React.ReactNode }) => {
  const params = useParams();
  const searchParams = useSearchParams();

  return (
    <div className="flex h-full">
      <Sidebar
        collapsible="none"
        className="bg-muted border-r overflow-auto w-[300px]"
      >
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Areas</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {instrument.area.map((item, index) => (
                  <Tree key={index} item={item} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <div className="flex-1 h-full bg-muted overflow-auto">{children}</div>
      </SidebarInset>
    </div>
  );
};

type TreeNode =
  | Area
  | Parameter
  | Indicator
  | { label: string; indicators: Indicator[] };

const isArea = (node: TreeNode): node is Area => {
  return "instrumentId" in node;
};

const isParameter = (node: TreeNode): node is Parameter => {
  return "areaId" in node;
};

const isIndicator = (node: TreeNode): node is Indicator => {
  return "parameterId" in node;
};

const Tree = ({ item }: { item: TreeNode }) => {
  if (isArea(item) && "parameter" in item) {
    const parameters = item.parameter as Parameter[];
    return (
      <SidebarMenuItem>
        <Collapsible>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton>
              <ChevronRight />
              <Folder />
              {item.label}
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {parameters.map((parameter) => (
                <Tree item={parameter} key={parameter.id} />
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>
      </SidebarMenuItem>
    );
  }
  if (isParameter(item) && "indicator" in item) {
    const indicators = item.indicator as Indicator[];
    const system = {
      label: "System",
      indicators: indicators.filter((i) => i.category === "SYSTEM"),
    };
    const implementation = {
      label: "Implementation",
      indicators: indicators.filter((i) => i.category === "IMPLEMENTATION"),
    };
    const outcomes = {
      label: "Outcome/s",
      indicators: indicators.filter((i) => i.category === "OUTCOME"),
    };
    const groupedIndicators = [system, implementation, outcomes];
    return (
      <SidebarMenuItem>
        <Collapsible>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton>
              <ChevronRight />
              <Folder />
              {item.label}
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {groupedIndicators.map((group, index) => (
                <Tree item={group} key={index} />
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>
      </SidebarMenuItem>
    );
  }
  if ("indicators" in item) {
    return (
      <SidebarMenuItem>
        <Collapsible>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton>
              <ChevronRight />
              <Folder />
              {item.label}
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.indicators.map((indicator) => (
                <Tree item={indicator} key={indicator.id} />
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>
      </SidebarMenuItem>
    );
  }
  if (isIndicator(item)) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton>
          <File />
          {item.label}
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }
};

export default InstrumentLayout;
