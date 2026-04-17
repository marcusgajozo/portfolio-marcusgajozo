import { ContactLinks } from "@/components/contact-links";
import { Section } from "@/components/section";

export function ContactSection() {
  return (
    <Section className="h-[80%] flex flex-col gap-3 justify-center items-center">
      <h2 className="text-3xl text-center font-medium">Formas de contato</h2>
      <p className="max-w-2xl text-center">
        Sinta-se à vontade para entrar em contato e conversarmos mais sobre seus
        projetos.
      </p>
      <ContactLinks />
    </Section>
  );
}
