import { LogoItem, LogoLoop } from "@/components/logo-loop";
import { AboutMeSection } from "./_components/about-me-section";
import { ContactSection } from "./_components/contact-section";
import { HomeSection } from "./_components/home-section";
import { ProjectsSection } from "./_components/projects-section";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

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

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutMeSection />
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
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
