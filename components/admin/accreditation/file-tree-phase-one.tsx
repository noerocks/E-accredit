import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import {
  AreaFolderDTO,
  EvidenceFileDTO,
  IndicatorFolderDTO,
  ParameterFolderDTO,
} from "@/lib/dto/phase-one-instrument";
import { Category } from "@/lib/generated/prisma";
import { ChevronRight, File, Folder } from "lucide-react";

type TreeNode =
  | AreaFolderDTO
  | ParameterFolderDTO
  | IndicatorFolderDTO
  | EvidenceFileDTO;

const isAreaFolder = (node: TreeNode): node is AreaFolderDTO => {
  return "areaId" in node;
};

const isParameterFolder = (node: TreeNode): node is ParameterFolderDTO => {
  return "parameterId" in node;
};

const isIndicatorFolder = (node: TreeNode): node is IndicatorFolderDTO => {
  return "parameterFolderId" in node;
};

const isEvidenceFile = (node: TreeNode): node is EvidenceFileDTO => {
  return "indicatorFolderId" in node;
};

const category = {
  SYSTEM: "System",
  IMPLEMENTATION: "Implementation",
  OUTCOME: "Outcome/s",
};

const FileTreePhaseOne = ({ item }: { item: TreeNode }) => {
  if (isAreaFolder(item)) {
    return (
      <SidebarMenuItem>
        <Collapsible className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90">
          <SidebarMenuButton data-id={item.id} data-type={"area"}>
            <CollapsibleTrigger asChild>
              <ChevronRight className="transition-transform" />
            </CollapsibleTrigger>
            <Folder />
            {item.area.label}
          </SidebarMenuButton>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.parameterFolders.map((parameter) => (
                <FileTreePhaseOne item={parameter} key={parameter.id} />
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>
      </SidebarMenuItem>
    );
  }
  if (isParameterFolder(item)) {
    const order = [Category.SYSTEM, Category.IMPLEMENTATION, Category.OUTCOME];
    return (
      <SidebarMenuItem>
        <Collapsible className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90">
          <SidebarMenuButton data-id={item.id} data-type={"parameter"}>
            <CollapsibleTrigger asChild>
              <ChevronRight className="transition-transform" />
            </CollapsibleTrigger>
            <Folder />
            {item.parameter.label}
          </SidebarMenuButton>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.indicatorFolders
                .sort(
                  (a, b) =>
                    order.indexOf(a.category) - order.indexOf(b.category)
                )
                .map((category) => (
                  <FileTreePhaseOne item={category} key={category.id} />
                ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>
      </SidebarMenuItem>
    );
  }
  if (isIndicatorFolder(item)) {
    return (
      <SidebarMenuItem>
        <Collapsible className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90">
          <SidebarMenuButton>
            <CollapsibleTrigger asChild>
              <ChevronRight className="transition-transform" />
            </CollapsibleTrigger>
            <Folder />
            {category[item.category]}
          </SidebarMenuButton>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.evidenceFiles.map((file) => (
                <FileTreePhaseOne item={file} key={file.id} />
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>
      </SidebarMenuItem>
    );
  }
  if (isEvidenceFile(item)) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton data-id={item.id} data-type={"indicator"}>
          <File />
          {item.indicator.label}
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }
};

export default FileTreePhaseOne;
