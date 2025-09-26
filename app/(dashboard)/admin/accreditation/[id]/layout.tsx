import AccreditationSidebar from "@/components/admin/accreditation/accreditation-sidebar";
import React from "react";

const AccreditationLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) => {
  return (
    <div className="flex h-full">
      <AccreditationSidebar />
      <div className="flex-1 h-full bg-muted overflow-auto">{children}</div>
    </div>
  );
};

export default AccreditationLayout;
