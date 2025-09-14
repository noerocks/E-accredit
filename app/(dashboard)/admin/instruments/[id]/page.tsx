"use client";

import { useParams, usePathname } from "next/navigation";

const InstrumentPage = () => {
  const path = usePathname();
  const params = useParams();
  return (
    <div>
      <p>{params.id}</p>
    </div>
  );
};

export default InstrumentPage;
