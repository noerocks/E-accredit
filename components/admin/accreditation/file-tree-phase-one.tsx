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
  PhaseTwoAreaFolderDTO,
} from "@/lib/dto/accreditation-instrument";
import { AreaFileType, Category } from "@/lib/generated/prisma";
import { ChevronRight, File, Folder } from "lucide-react";
import { useParams } from "next/navigation";

type TreeNode =
  | AreaFolderDTO
  | ParameterFolderDTO
  | IndicatorFolderDTO
  | EvidenceFileDTO
  | PhaseTwoAreaFolderDTO;

const isAreaFolder = (node: TreeNode): node is AreaFolderDTO => {
  return "instrumentFolderId" in node;
};

const isPhaseTwoAreaFolder = (
  node: TreeNode
): node is PhaseTwoAreaFolderDTO => {
  return "phaseTwoFolderId" in node;
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
  [Category.SYSTEM]: "System",
  [Category.IMPLEMENTATION]: "Implementation",
  [Category.OUTCOME]: "Outcome/s",
};

const areaFileType = {
  [AreaFileType.PPP]: "Program Performance Profile",
  [AreaFileType.COMPLIANCE_REPORT]: "Compliance Report",
  [AreaFileType.NARRATIVE_PROFILE]: "Narrative Profile",
};

const FileTreePhaseOne = ({ item }: { item: TreeNode }) => {
  const params = useParams();
  if (isAreaFolder(item)) {
    return (
      <SidebarMenuItem>
        <Collapsible
          className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
          defaultOpen
        >
          <SidebarMenuButton data-id={item.id} data-type={"area"}>
            <CollapsibleTrigger asChild>
              <ChevronRight className="transition-transform" />
            </CollapsibleTrigger>
            {`📁 ${item.area.label}`}
          </SidebarMenuButton>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.areaFiles.map((areaFile) => (
                <SidebarMenuButton
                  key={areaFile.id}
                  data-id={areaFile.id}
                  data-type={"area-file"}
                >{`📄 ${areaFileType[areaFile.type]}`}</SidebarMenuButton>
              ))}
              {item.parameterFolders.map((parameter) => (
                <FileTreePhaseOne item={parameter} key={parameter.id} />
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>
      </SidebarMenuItem>
    );
  }
  if (isPhaseTwoAreaFolder(item)) {
    return (
      <SidebarMenuItem>
        <Collapsible
          className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
          defaultOpen
        >
          <SidebarMenuButton data-id={item.id} data-type={"area"}>
            <CollapsibleTrigger asChild>
              <ChevronRight className="transition-transform" />
            </CollapsibleTrigger>
            {`📁 ${item.area.label}`}
          </SidebarMenuButton>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.areaFiles.map((areaFile) => (
                <SidebarMenuButton
                  key={areaFile.id}
                  data-id={areaFile.id}
                  data-type={"area-file"}
                >{`📄 ${areaFileType[areaFile.type]}`}</SidebarMenuButton>
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
        <Collapsible
          className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
          defaultOpen
        >
          <SidebarMenuButton data-id={item.id} data-type={"parameter"}>
            <CollapsibleTrigger asChild>
              <ChevronRight className="transition-transform" />
            </CollapsibleTrigger>
            {`📁 ${item.parameter.label}`}
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
        <Collapsible
          className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
          defaultOpen
        >
          <SidebarMenuButton>
            <CollapsibleTrigger asChild>
              <ChevronRight className="transition-transform" />
            </CollapsibleTrigger>
            {`📁 ${category[item.category]}`}
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
        <SidebarMenuButton
          data-id={item.id}
          data-type={"evidence"}
          isActive={item.id === String(params.evidenceId)}
        >
          {`📄 ${item.indicator.label}`}
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }
};

export default FileTreePhaseOne;
