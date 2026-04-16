import { LogoItem, LogoLoop } from "@/components/logo-loop";
import { Section, SectionHeader } from "@/components/section";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

interface HardSkillSectionProps {
  number: number;
}

const techLogos: LogoItem[] = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

export function HardSkillSection({ number }: HardSkillSectionProps) {
  return (
    <Section>
      <SectionHeader title="Hard Skill" number={number} />
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="right"
        logoHeight={30}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        ariaLabel="Technology partners"
      />
    </Section>
  );
}
