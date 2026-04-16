import { Icon } from "@/components/icon";
import { Section } from "@/components/section";
import Link from "next/link";

export function HomeSection() {
  return (
    <Section className="h-[95%] flex flex-col items-center justify-center">
      <section className="flex flex-col w-full">
        <h3 className="text-xl">Olá! Eu sou o</h3>
        <h1 className="text-7xl font-medium tracking-[-0.1rem]">
          Marcus Gajozo
        </h1>
        <h3 className="text-xl mt-3">
          <span className="font-medium">Desenvolvedor Full Stack</span>, crio
          aplicações web e mobile resolvendo problemas complexos com código
          limpo e eficiente.
        </h3>
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
      </section>
    </Section>
  );
}
