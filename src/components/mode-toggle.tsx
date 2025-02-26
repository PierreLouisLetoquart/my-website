"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  function toggleTheme() {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  }

  return (
    <button
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-2 py-1 border border-muted-foreground text-xs text-muted-foreground font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring [&_svg]:pointer-events-none"
      onClick={toggleTheme}
    >
      {resolvedTheme === "light" ? (
        <Moon className="size-[.8rem]" />
      ) : (
        <Sun className="size-[.8rem]" />
      )}
      {resolvedTheme === "light" ? "light mode" : "dark mode"}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
