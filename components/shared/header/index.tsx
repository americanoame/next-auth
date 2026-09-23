import Link from "next/link";

import { APP_NAME } from "@/lib/constants";
import UserButton from "@/components/shared/header/user-button";
import ModeToggle from "./mode-toggle";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <span className="text-[22px] lg:text-3xl font-bold ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className=" text-white rounded-md"></div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
