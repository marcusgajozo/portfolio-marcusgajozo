"use client";

import { useTheme } from "next-themes";
import { PublicRoutes } from "@/enums/routes";
import { MenuItem, MenuItemProps } from "./components/menu-item";
import { Button } from "../button";

const listMenu: MenuItemProps[] = [
  { name: "Home", iconName: "home", url: PublicRoutes.Home },
  { name: "Projects", iconName: "folder", url: PublicRoutes.Projects },
  { name: "Experience", iconName: "suitcase", url: PublicRoutes.Experience },
  { name: "Contact", iconName: "mail-right", url: PublicRoutes.Contact },
];

export function Sidebar() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="h-full relative">
      <Button variant="ghost" iconName="moon" onClick={handleToggleTheme} />
      <ul className="flex flex-col items-center justify-center gap-10 h-full">
        {listMenu.map((item, index) => (
          <li key={`${item.name}-menu-item-${index}`}>
            <MenuItem
              name={item.name}
              iconName={item.iconName}
              url={item.url}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
