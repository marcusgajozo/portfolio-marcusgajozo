"use client";

import { Button } from "@/components/button";
import { useTheme } from "next-themes";
import { useCallback } from "react";

export function ToogleTheme() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const handleToggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      variant="ghost"
      iconName={isDark ? "sun" : "moon"}
      onClick={handleToggleTheme}
    />
  );
}
