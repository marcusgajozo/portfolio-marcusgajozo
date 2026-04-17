import { Icon } from "@/components/icon";
import { Section } from "@/components/section";
import Link from "next/link";

// TODO: criar um componente chamado links para contato

export function ContactSection() {
  return (
    <Section className="h-[80%] flex flex-col gap-3 justify-center items-center">
      <h2 className="text-3xl text-center font-medium">Formas de contato</h2>
      <p className="max-w-2xl text-center">
        Sinta-se à vontade para entrar em contato e conversarmos mais sobre seus
        projetos.
      </p>
      <div className="flex gap-4 mt-4 font-medium">
        <Link
          href="https://www.linkedin.com/in/marcus-gajozo/"
          target="_blank"
          className="flex gap-1 items-center"
        >
          <Icon name="linkedin" />
          Linkedin
        </Link>
        <Link
          href="https://github.com/marcusgajozo/"
          target="_blank"
          className="flex gap-1 items-center"
        >
          <Icon name="github" strokeWidth={2} />
          Github
        </Link>
        <Link
          href="mailto:marcusgajozo@example.com"
          target="_blank"
          className="flex gap-1 items-center"
        >
          <Icon name="mail-right" />
          E-mail
        </Link>
      </div>
    </Section>
  );
}
