import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-svh flex justify-center items-center relative">
      <div className="absolute top-0 left-0 p-5 flex items-center justify-between gap-2 w-full">
        <Link href="/">
          <Button variant="outline" size="icon">
            <Home />
          </Button>
        </Link>
        <ModeToggle />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
