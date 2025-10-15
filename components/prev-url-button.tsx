"use client";

import { MoveLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const PrevButton = () => {
  const router = useRouter();
  return (
    <Button
      variant="ghost"
      onClick={() => {
        const url = localStorage.getItem("prev");
        if (!url) return;
        router.replace(url);
        localStorage.removeItem("prev");
      }}
    >
      <MoveLeft />
      Back
    </Button>
  );
};

export default PrevButton;
