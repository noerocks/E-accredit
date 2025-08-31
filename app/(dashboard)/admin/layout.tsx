import DashboardHeader from "@/components/admin/dashboard-header";
import DashboardSidebar from "@/components/admin/dashboard-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const AdminLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset className="flex flex-col">
        <DashboardHeader />
        <main className="flex-1">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AdminLayout;
