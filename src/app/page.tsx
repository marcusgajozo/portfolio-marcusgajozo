import { AboutMeSection } from "./_components/about-me-section";
import { ContactSection } from "./_components/contact-section";
import { HomeSection } from "./_components/home-section";
import { ProjectsSection } from "./_components/projects-section";

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
