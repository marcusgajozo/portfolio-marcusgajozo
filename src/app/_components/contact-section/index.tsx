import { Section } from "@/components/section";

export function ContactSection() {
  return (
    <Section className="h-[80%] flex flex-col gap-3 mt-10 justify-center items-center">
      <h2 className="text-3xl font-medium">Mantenha contato.</h2>
      <p className="max-w-2xl text-center">
        Atualmente, sou especialista em Desenvolvimento Front-end . Sinta-se à
        vontade para entrar em contato e conversarmos mais sobre seus projetos.
      </p>
    </Section>
  );
}
