import Link from "next/link";

// import { APP_NAME } from "@/lib/constants";
import UserButton from "@/components/shared/header/user-button";
// import ModeToggle from "./mode-toggle";

import { Globe } from "lucide-react";

const Header = () => {
  const navLinks = [
    { name: "Product", href: "/" },
    { name: "About", href: "/about" },
    { name: "Articles", href: "/articles" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full">
  <div className="wrapper">

    {/* Mobile Top Bar */}
    <div className="flex items-center justify-between mt-7 md:hidden">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-black-500" />
          <span className="text-[15px] text-black-500 font-[500]">
            Geo&Core.ai
          </span>
        </Link>
      </div>

      {/* User */}
      <div className="shrink-0 flex items-center scale-75 origin-right">
        <UserButton />
      </div>
    </div>

    {/* Desktop Header */}
    <div className="hidden md:flex items-center justify-between gap-3 mt-7">

      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-black-500" />
          <span className="text-[15px] text-black-500 font-[500]">
            Geo&Core.ai
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-center gap-6 overflow-x-auto py-2 px-6 bg-gray-100 dark:bg-gray-800 rounded-full">
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

      {/* User */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="scale-64 origin-right">
          <UserButton />
        </div>
      </div>

    </div>

    {/* Mobile Navigation */}
    <nav className="flex md:hidden items-center justify-center gap-6 overflow-x-auto py-2 px-6 mt-8 bg-gray-100 dark:bg-gray-800 rounded-full">
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

  </div>
</header>
  );
};

export default Header;
