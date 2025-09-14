"use client";

import { useParams } from "next/navigation";

const Area = () => {
  const params = useParams();
  console.log(params);
  return <p>Area</p>;
};

export default Area;
