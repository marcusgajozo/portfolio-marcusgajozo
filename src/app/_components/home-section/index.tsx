import { ContactLinks } from "@/components/contact-links";
import { Section } from "@/components/section";

export function HomeSection() {
  return (
    <Section className="h-[95%] flex flex-col items-center justify-center">
      <section className="flex flex-col w-full">
        <h3 className="text-xl">Olá! Eu sou o</h3>
        <h1 className="text-4xl lg:text-7xl font-medium tracking-[-0.1rem]">
          Marcus Gajozo
        </h1>
        <h3 className="text-lg mt-3 max-w-4xl">
          <span className="font-bold">Desenvolvedor Full Stack</span>, crio
          aplicações web e mobile resolvendo problemas complexos com código
          limpo e eficiente.
        </h3>
        <ContactLinks />
      </section>
    </Section>
  );
}
