import { Icon } from "@/components/icon";
import { PUBLIC_ROUTES } from "@/constants/routes";
import Link from "next/link";
import { ComponentProps } from "react";

export interface MenuItemProps {
  name: string;
  iconName: ComponentProps<typeof Icon>["name"];
  url: (typeof PUBLIC_ROUTES)[keyof typeof PUBLIC_ROUTES];
}

export function MenuItem({ name, iconName, url }: MenuItemProps) {
  return (
    <Link
      href={url}
      className="w-full flex flex-col items-center gap-1 px-2 py-2 md:border-r-4 border-primary flex-1 text-xs font-medium"
    >
      <Icon name={iconName} />
      {name}
    </Link>
  );
}
