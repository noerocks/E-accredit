import {
  Award,
  BadgeCheck,
  ClipboardCheck,
  ClipboardList,
  FileArchive,
  FolderCheck,
  Home,
  Landmark,
  LayoutDashboard,
  SearchCheck,
  Users,
} from "lucide-react";
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
} from "../../ui/sidebar";
import Link from "next/link";
import NavUser from "./nav-user";
import { getUserProfile } from "@/lib/dal/user";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const DashboardSidebar = async () => {
  const user = await getUserProfile();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="hover:bg-transparent">
              <Avatar>
                <AvatarImage src={"/ctu-logo.png"} />
              </Avatar>
              <div className="flex flex-col !w-auto !opacity-100 whitespace-nowrap">
                <p className="text-lg">E-Accredit AMS</p>
                <p className="text-xs text-muted-foreground leading-none">
                  CTU Naga Ext. Campus
                </p>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>AMS</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href={"/admin"}>
                  <LayoutDashboard className="text-muted-foreground" />
                  <span className="whitespace-nowrap">Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href={"/admin/users"}>
                  <Users className="text-muted-foreground" />
                  <span className="whitespace-nowrap">Users</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>CTU Naga Ext. Campus</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href={"/admin/programs"}>
                  <Landmark className="text-muted-foreground" />
                  <span className="whitespace-nowrap">
                    Programs & Personnel
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href={"/admin/program-accreditations"}>
                  <Award className="text-muted-foreground" />
                  <span className="whitespace-nowrap">
                    Program Accreditations
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Documents & Archive</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href={"/admin/accreditation"}>
                  <FileArchive className="text-muted-foreground" />
                  <span className="whitespace-nowrap">
                    Survey Visit Portfolio
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href={"/admin/instruments"}>
                  <ClipboardCheck className="text-muted-foreground" />
                  <span className="whitespace-nowrap">Instruments</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Surveys</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href={"/admin/self-survey"}>
                  <SearchCheck className="text-muted-foreground" />
                  <span className="whitespace-nowrap">Self Survey</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href={"/admin/actual-survey"}>
                  <SearchCheck className="text-muted-foreground" />
                  <span className="whitespace-nowrap">Actual Survey</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
