import DashboardHeader from "@/components/admin/layout/dashboard-header";
import DashboardSidebar from "@/components/admin/layout/dashboard-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const AdminLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset className="flex flex-col h-screen">
        <DashboardHeader />
        <main className="flex-1 bg-muted overflow-auto">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AdminLayout;
