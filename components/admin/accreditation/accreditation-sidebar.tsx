import { Sidebar } from "@/components/ui/sidebar";

const AccreditationSidebar = async () => {
  return (
    <Sidebar
      collapsible="none"
      className="border-r overflow-auto w-[300px] flex flex-col"
    ></Sidebar>
  );
};

export default AccreditationSidebar;
