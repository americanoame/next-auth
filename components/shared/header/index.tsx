import Link from "next/link";

// import { APP_NAME } from "@/lib/constants";
import UserButton from "@/components/shared/header/user-button";
import ModeToggle from "./mode-toggle";

import { Globe } from "lucide-react";

const Header = () => {
  const navLinks = [
    { name: "Product", href: "/" },
    { name: "About", href: "/about" },
    { name: "Articles", href: "/articles" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full ">
      <div className="wrapper flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        {/* Top-Right Controls for Mobile */}
        <div className="flex items-center justify-end gap-3 w-full shrink-0 md:hidden">
          <div className="shrink-0 flex items-center">
            <ModeToggle />
          </div>
          <div className="shrink-0 flex items-center scale-75 origin-right">
            <UserButton />
          </div>
        </div>

        {/* Logo: Position unchanged, pushed down with mt-8 across all screens */}
        <div className="flex justify-center md:justify-start items-center mt-7">
          <Link href="/" className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-black-500" />
            <span className="text-[15px] text-black-500 font-[500]">
              {/* {APP_NAME} */}
              Geo&Core.ai
            </span>
          </Link>
        </div>

        {/* Navigation Links: Position unchanged, pushed down with mt-8 across all screens */}
        <nav className="flex items-center justify-center gap-6 overflow-x-auto py-2 px-6 mt-8 bg-gray-100 dark:bg-gray-800 rounded-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[12px] font-medium hover:text-primary transition-colors whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <ModeToggle />
          <div className="scale-64 origin-right">
            <UserButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
