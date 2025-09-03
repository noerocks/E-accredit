import DashboardHeader from "@/components/admin/dashboard-header";
import DashboardSidebar from "@/components/admin/dashboard-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const AdminLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset className="flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 bg-muted px-10 py-5">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AdminLayout;
