import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import React from "react";

const InstrumentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sidebar>
        <SidebarContent></SidebarContent>
      </Sidebar>
      {children}
    </div>
  );
};

export default InstrumentLayout;
