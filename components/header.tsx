import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { getAccreditations } from "@/lib/dal/accreditation";
import { formatAccreditationName } from "@/lib/utils";

const Header = async () => {
  const navs = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Features", link: "#features" },
  ];
  const accreditations = await getAccreditations();
  const programs = accreditations
    .filter((accreditation) => accreditation.status === "ACTIVE")
    .map((accreditation) => ({
      label: formatAccreditationName(
        accreditation.program.code,
        accreditation.level
      ),
      link: `/public-portfolio/${
        accreditation.surveyVisits.find(
          (visit) =>
            visit.level.id === accreditation.level.id &&
            visit.surveyResultStatus === "GRANTED"
        )?.id
      }`,
    }));
  return (
    <header className="flex justify-between items-center py-5 px-50 sticky top-0 z-20 bg-secondary border-b-8 border-b-yellow-500 dark:shadow-background/5 shadow-lg shadow-foreground/5">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={"/ctu-logo.png"} />
        </Avatar>
        <p className="text-2xl font-semibold">CTU Naga Ext. Campus</p>
      </div>

      <nav>
        <ul className="flex gap-10 items-center">
          {navs.map((nav) => (
            <li key={nav.link}>
              <a
                href={nav.link}
                className="relative group text-foreground font-medium transition-colors hover:text-blue-500"
              >
                {nav.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}

          <li className="relative group text-foreground font-medium transition-colors hover:text-blue-500">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 focus:outline-none">
                  <span>Accredited Programs</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-64 mt-2 animate-in fade-in-50 zoom-in-95 duration-200">
                <DropdownMenuLabel>Programs</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {programs.map((program) => (
                  <DropdownMenuItem key={program.label} asChild>
                    <Link
                      href={program.link || ""}
                      className="w-full hover:text-blue-500 transition-colors"
                    >
                      {program.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-2">
        <Link href="/login">
          <Button>Log in</Button>
        </Link>
        <Link href="/register">
          <Button variant="outline">Register</Button>
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
