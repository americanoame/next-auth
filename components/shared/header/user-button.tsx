import Link from "next/link";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOutUser } from "@/lib/actions/user.actions";
// import { UserIcon } from "lucide-react";

const UserButton = async () => {
  const session = await auth();

  if (!session)
    return (
      <Button className="bg-gray-700" asChild>
        <Link href="/sign-in">
          {/* <UserIcon /> Log In */}
          Log in
        </Link>
      </Button>
    );

  const firstInitial = session.user?.name?.charAt(0).toUpperCase() ?? "U";

  return (
  <div className="flex items-center gap-3">
    <Button asChild variant="ghost">
      <Link href="/customer">
        Dashboard
      </Link>
    </Button>

    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative w-8 h-8 rounded-full flex items-center justify-center bg-gray-300"
        >
          {firstInitial}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {session.user?.name}
            </p>

            <p className="text-xs leading-none text-muted-foreground">
              {session.user?.email}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuItem className="p-0">
          <form action={SignOutUser} className="w-full">
            <Button
              className="w-full justify-start"
              variant="ghost"
            >
              Sign Out
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);
};

export default UserButton;
