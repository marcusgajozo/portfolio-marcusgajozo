import { Icon } from "@/components/icon";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col w-[80%]">
          <h3 className="text-xl">Olá! Eu sou o</h3>
          <h1 className="text-7xl font-medium">Marcus Gajozo</h1>
          <h3 className="text-xl mt-3">
            <span className="font-medium">Desenvolvedor de Software</span>, crio
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
        </div>
      </section>
    </>
  );
}
