"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Back = () => {
  const router = useRouter();
  return (
    <Button className="mt-3 ml-3" variant="ghost" onClick={() => router.back()}>
      <ArrowLeft />
      Back
    </Button>
  );
};

export default Back;
