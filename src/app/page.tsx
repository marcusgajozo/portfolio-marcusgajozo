import { AboutMeSection } from "./_components/about-me-section";
import { ArticlesSection } from "./_components/articles-section";
import { ContactSection } from "./_components/contact-section";
import { HardSkillSection } from "./_components/hard-skill-section";
import { HomeSection } from "./_components/home-section";
import { ProjectsSection } from "./_components/projects-section";

// TODO: adicionar o rastreador de mouse em pixel art pixel trail

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutMeSection number={1} />
      <HardSkillSection number={2} />
      <ProjectsSection number={3} />
      <ArticlesSection number={4} />
      <ContactSection />
    </>
  );
}
