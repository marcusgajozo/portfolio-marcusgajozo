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

// TODO: romver LogoLoop e criar um table dinamica para receber as tecnologias, e criar um componente de logo para receber o link e o nome da tecnologia, e criar uma animação de fade in e fade out para as logos, e criar uma animação de scale on hover para as logos, e criar uma animação de scroll para as logos, e criar uma animação de scroll infinito para as logos, e criar uma animação de scroll infinito com direção para as logos, e criar uma animação de scroll infinito com velocidade para as logos, e criar uma animação de scroll infinito com gap para as logos, e criar uma animação de scroll infinito com hover speed para as logos, e criar uma animação de scroll infinito com scale on hover para as logos, e criar uma animação de scroll infinito com fade out para as logos, e criar uma animação de scroll infinito com aria label para as logos

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
