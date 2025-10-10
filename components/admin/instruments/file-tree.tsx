"use client";

import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import { Area, Parameter, Indicator } from "@/lib/generated/prisma";
import { ChevronRight, File, Folder } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useParams } from "next/navigation";

type IndicatorGroup = { label: string; indicators: Indicator[] };

type TreeNode = Area | Parameter | Indicator | IndicatorGroup;

const isArea = (node: TreeNode): node is Area => {
  return "instrumentId" in node;
};

const isParameter = (node: TreeNode): node is Parameter => {
  return "areaId" in node;
};

const isIndicator = (node: TreeNode): node is Indicator => {
  return "parameterId" in node;
};

const isIndicatorGroup = (node: TreeNode): node is IndicatorGroup => {
  return "indicators" in node;
};

const FileTree = ({ item }: { item: TreeNode }) => {
  const params = useParams();
  if (isArea(item) && "parameter" in item) {
    const parameters = item.parameter as Parameter[];
    return (
      <SidebarMenuItem>
        <Collapsible
          className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
          defaultOpen
        >
          <SidebarMenuButton
            data-id={item.id}
            data-type={"area"}
            isActive={item.id === Number(params.areaId)}
          >
            <CollapsibleTrigger asChild>
              <ChevronRight className="transition-transform" />
            </CollapsibleTrigger>
            {`📁 ${item.label}`}
          </SidebarMenuButton>
          <CollapsibleContent>
            <SidebarMenuSub>
              {parameters
                .sort((a, b) => a.label.localeCompare(b.label))
                .map((parameter) => (
                  <FileTree item={parameter} key={parameter.id} />
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
        <Collapsible
          className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
          defaultOpen
        >
          <SidebarMenuButton
            data-id={item.id}
            data-type={"parameter"}
            isActive={item.id === Number(params.parameterId)}
          >
            <CollapsibleTrigger asChild>
              <ChevronRight className="transition-transform" />
            </CollapsibleTrigger>
            {`📁 ${item.label}`}
          </SidebarMenuButton>
          <CollapsibleContent>
            <SidebarMenuSub>
              {groupedIndicators.map((group, index) => (
                <FileTree item={group} key={index} />
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>
      </SidebarMenuItem>
    );
  }
  if (isIndicatorGroup(item)) {
    return (
      <SidebarMenuItem>
        <Collapsible
          className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
          defaultOpen
        >
          <SidebarMenuButton>
            <CollapsibleTrigger asChild>
              <ChevronRight className="transition-transform" />
            </CollapsibleTrigger>
            {`📁 ${item.label}`}
          </SidebarMenuButton>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.indicators.map((indicator) => (
                <FileTree item={indicator} key={indicator.id} />
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
        <SidebarMenuButton
          data-id={item.id}
          data-type={"indicator"}
          isActive={item.id === Number(params.indicatorId)}
        >
          {`📄 ${item.label}`}
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }
};

export default FileTree;
