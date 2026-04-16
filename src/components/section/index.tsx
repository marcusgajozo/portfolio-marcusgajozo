import { ComponentProps } from "react";

export function Section({
  children,
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section className={`px-25 ${className}`} {...props}>
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  number: number;
}

export function SectionHeader({ title, number }: SectionHeaderProps) {
  return (
    <h2 className="text-2xl font-bold">
      <span className="text-sm mr-1">0{number}.</span>
      {title}
    </h2>
  );
}
