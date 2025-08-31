import { ModeToggle } from "../mode-toggle";
import { SidebarTrigger } from "../ui/sidebar";

const DashboardHeader = () => {
  return (
    <header className="h-16 flex items-center justify-between gap-4 p-5 border-b">
      <SidebarTrigger />
      <ModeToggle />
    </header>
  );
};

export default DashboardHeader;
