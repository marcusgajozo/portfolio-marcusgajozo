import { PublicRoutes } from "@/enums/routes";
import { MenuItem, MenuItemProps } from "./components/menu-item";
import { ToogleTheme } from "./components/toggle-theme";

const listMenu: MenuItemProps[] = [
  { name: "Home", iconName: "home", url: PublicRoutes.Home },
  { name: "Projects", iconName: "folder", url: PublicRoutes.Projects },
  { name: "Experience", iconName: "suitcase", url: PublicRoutes.Experience },
  { name: "Contact", iconName: "mail-right", url: PublicRoutes.Contact },
];

export function Sidebar() {
  return (
    <nav className="h-full flex items-center justify-center relative">
      <div className="absolute top-2">
        <ToogleTheme />
      </div>
      <ul className="flex flex-col items-center gap-10">
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
