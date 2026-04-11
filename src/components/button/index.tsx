import { ComponentProps } from "react";
import { Icon } from "../icon";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "ghost";
  iconName?: ComponentProps<typeof Icon>["name"];
}

export function Button({
  variant = "primary",
  iconName,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded ${
        variant === "primary"
          ? "bg-blue-500 text-white"
          : variant === "secondary"
            ? "bg-gray-500 text-white"
            : "bg-transparent text-blue-500"
      }`}
      {...props}
    >
      {iconName && <Icon name={iconName} className="mr-2" />}
      {children}
    </button>
  );
}
