"use client";

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
import { Check, ChevronRight, File, Folder, X } from "lucide-react";
import { useParams, usePathname } from "next/navigation";

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

const FileTree = ({ item }: { item: TreeNode }) => {
  const params = useParams();
  const pathName = usePathname();
  const root = pathName
    .split("/")
    .filter((segment) => segment)
    .at(1);
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
              {item.areaFiles
                .sort((a, b) => a.type.localeCompare(b.type))
                .map((areaFile) => (
                  <SidebarMenuButton
                    key={areaFile.id}
                    data-id={areaFile.id}
                    data-type={"area-file"}
                  >
                    {`📄 ${areaFileType[areaFile.type]}`}
                  </SidebarMenuButton>
                ))}
              {item.parameterFolders
                .sort((a, b) =>
                  a.parameter.label.localeCompare(b.parameter.label)
                )
                .map((parameter) => (
                  <FileTree item={parameter} key={parameter.id} />
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
            <p className="flex-1 truncate w-[10px] pointer-events-none">
              {`📁 ${item.area.label}`}
            </p>
          </SidebarMenuButton>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.areaFiles
                .sort((a, b) => a.type.localeCompare(b.type))
                .map((areaFile) => (
                  <SidebarMenuButton
                    key={areaFile.id}
                    data-id={areaFile.id}
                    data-type={"area-file"}
                  >
                    {`📄 ${areaFileType[areaFile.type]}`}
                    <p className="absolute right-5 pointer-events-none">
                      {root === "phase-two-survey" ||
                      (root === "phase-two" &&
                        areaFile.status === "SUBMITTED") ? (
                        <Check size={15} className="text-green-500" />
                      ) : areaFile.status === "EMPTY" ? (
                        <X size={15} className="text-red-500" />
                      ) : null}
                    </p>
                  </SidebarMenuButton>
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
                  <FileTree item={category} key={category.id} />
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
              {item.evidenceFiles
                .sort((a, b) =>
                  a.indicator.label.localeCompare(b.indicator.label)
                )
                .map((file) => (
                  <FileTree item={file} key={file.id} />
                ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>
      </SidebarMenuItem>
    );
  }
  if (isEvidenceFile(item)) {
    const internalRating = item.ratings?.find(
      (rating) => rating.type === "INTERNAL"
    );
    const externalRating = item.ratings?.find(
      (rating) => rating.type === "EXTERNAL"
    );
    let rating = null;
    switch (root) {
      case "self-survey": {
        rating = internalRating;
        break;
      }
      case "actual-survey": {
        rating = externalRating;
        break;
      }
    }
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          data-id={item.id}
          data-type={"evidence"}
          isActive={item.id === String(params.evidenceId)}
          className="flex"
          title={item.indicator.description}
        >
          <p className="pointer-events-none">{`📄 ${item.indicator.label}`}</p>
          <p className="flex-1 truncate w-[80px] pointer-events-none">
            {item.indicator.description}
          </p>
          <p className="absolute -right-5 pointer-events-none">
            {(root === "accreditation" && item.status === "ACCEPTED") ||
            rating ? (
              <Check size={15} className="text-green-500" />
            ) : item.status === "REJECTED" ? (
              <X size={15} className="text-red-500" />
            ) : null}
          </p>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }
};

export default FileTree;
