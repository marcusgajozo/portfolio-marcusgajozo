import { ComponentProps } from "react";

export function Section({
  children,
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section className={`px-5 sm:px-10 lg:px-40  ${className}`} {...props}>
      {children}
    </section>
  );
}

interface SectionHeaderProps extends ComponentProps<"h2"> {
  title: string;
  number: number;
}

export function SectionHeader({ title, number, ...props }: SectionHeaderProps) {
  return (
    <h2 className="text-2xl font-bold mb-4" {...props}>
      <span className="text-sm mr-1">0{number}.</span>
      {title}
    </h2>
  );
}
