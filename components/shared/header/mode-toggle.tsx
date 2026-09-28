"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { MoonIcon, SunIcon } from "lucide-react";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-2">
      <SunIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        className="data-[state=checked]:bg-zinc-900 data-[state=unchecked]:bg-gray-300 [&>span]:bg-white [&>span]:border [&>span]:border-gray-400 [&>span]:shadow-md"
      />
      <MoonIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
    </div>
  );
};

export default ModeToggle;