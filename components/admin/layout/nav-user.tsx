"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "../../ui/dropdown-menu";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../ui/sidebar";
import { AvatarImage, Avatar, AvatarFallback } from "../../ui/avatar";
import { ChevronsUpDown, LogOut } from "lucide-react";
import { logout } from "@/lib/action/authentication";

const NavUser = ({
  user,
}: {
  user: {
    email: string;
    fullName: string;
    photoURL: string | undefined | null;
  } | null;
}) => {
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton size="lg">
                <Avatar className="border p-2 rounded-full bg-muted">
                  <AvatarImage
                    src={user?.photoURL || ""}
                    alt={user?.fullName}
                  />
                  <AvatarFallback className="rounded-lg">{`${user?.fullName
                    .split(" ")
                    .reduce(
                      (initial, name) =>
                        (initial += name[0].toUpperCase()).slice(0, 3),
                      ""
                    )}`}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col leading-none">
                  <span>{user?.fullName}</span>
                  <span>{user?.email}</span>
                </div>
                <ChevronsUpDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="right"
              align="end"
              sideOffset={4}
              className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-56 rounded-lg"
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="border p-2 rounded-full bg-muted">
                    <AvatarImage
                      src={user?.photoURL || ""}
                      alt={user?.fullName}
                    />
                    <AvatarFallback className="rounded-lg">{`${user?.fullName
                      .split(" ")
                      .reduce(
                        (initial, name) => (initial += name[0].toUpperCase()),
                        ""
                      )}`}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col leading-none">
                    <span>{user?.fullName}</span>
                    <span>{user?.email}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem
                  onClick={async () => {
                    await logout();
                  }}
                >
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};

export default NavUser;
