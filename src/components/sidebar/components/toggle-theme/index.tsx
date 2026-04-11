"use client";

import { Button } from "@/components/button";
import { useTheme } from "next-themes";

export function ToogleTheme() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return <Button variant="ghost" iconName="moon" onClick={handleToggleTheme} />;
}
