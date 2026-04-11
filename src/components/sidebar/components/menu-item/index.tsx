import { Icon } from "@/components/icon";
import { PublicRoutes } from "@/enums/routes";
import Link from "next/link";
import { ComponentProps } from "react";

export interface MenuItemProps {
  name: string;
  iconName: ComponentProps<typeof Icon>["name"];
  url: PublicRoutes;
}

export function MenuItem({ name, iconName, url }: MenuItemProps) {
  return (
    <Link href={url} className="flex flex-col items-center gap-1">
      <Icon name={iconName} />
      {name}
    </Link>
  );
}
