import { PUBLIC_ROUTES } from "@/constants/routes";
import { MenuItem, MenuItemProps } from "./components/menu-item";
import { ToogleTheme } from "./components/toggle-theme";

const listMenu: MenuItemProps[] = [
  { name: "Home", iconName: "home", url: PUBLIC_ROUTES.HOME },
  { name: "Projects", iconName: "file-code", url: PUBLIC_ROUTES.PROJECTS },
  { name: "Experience", iconName: "suitcase", url: PUBLIC_ROUTES.EXPERIENCE },
  { name: "Contact", iconName: "mail-right", url: PUBLIC_ROUTES.CONTACT },
];

export function Sidebar() {
  return (
    <nav className="h-full flex items-center justify-center relative bg-sidebar-background">
      <div className="absolute top-2">
        <ToogleTheme />
      </div>
      <ul className="flex flex-col items-center gap-6">
        {listMenu.map((item, index) => (
          <li key={`${item.name}-menu-item-${index}`} className="w-full">
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
