import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

const Header = () => {
  const navs = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Features", link: "#features" },
  ];
  return (
    <header className="flex justify-between items-center py-5 px-50 sticky bg-secondary top-0 dark:shadow-background/5 shadow-lg shadow-foreground/5 border-b-8 border-b-yellow-500 z-20">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={"/ctu-logo.png"} />
        </Avatar>
        <p className="text-2xl font-semibold">CTU Naga Ext. Campus</p>
      </div>
      <nav>
        <ul className="flex gap-10">
          {navs.map((nav) => (
            <li key={nav.link}>
              <a href={nav.link}>{nav.label}</a>
            </li>
          ))}
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
