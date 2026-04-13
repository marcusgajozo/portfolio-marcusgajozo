import { Icon } from "@/components/icon";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="h-[95%] flex flex-col items-center justify-center">
        <div className="flex flex-col w-[80%]">
          <h3 className="text-xl">Olá! Eu sou o</h3>
          <h1 className="text-7xl font-medium tracking-[-0.1rem]">
            Marcus Gajozo
          </h1>
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
      <section className="h-[95%] flex flex-col items-center">
        <div className="flex flex-col w-[80%]">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Icon name="thunder" />
            Sobre mim
          </h2>
          <section className="mt-3 flex flex-col gap-3">
            <p>
              Desenvolvedor de software com experiência na construção de
              sistemas governamentais e aplicações web de alta performance.
              Especializado no ecossistema React e Next.js com foco em
              arquitetura MVVM, Atomic Design e gerenciamento de estado
              eficiente com TanStack Query e Zustand.
            </p>
            <h3 className="text-md font-bold flex items-center gap-2">
              Resultados e Experiência
            </h3>
            <p>
              Sistemas Governamentais (SEAD-MS): Atuei no desenvolvimento de
              interfaces críticas para projetos de impacto social, garantindo
              acessibilidade e robustez em ambiente de produção.
            </p>
            <p>
              Engenharia de Software: Implementação de padrões de design,
              tipagem estrita com TypeScript e validação de dados com Zod,
              reduzindo a incidência de bugs através de código limpo e
              escalável.
            </p>
            <p>
              Web 3D e Inovação: Liderança técnica no projeto EcoBrasil
              Aventura, utilizando React Three Fiber para criar experiências
              tridimensionais otimizadas para hardware de baixo desempenho.
            </p>
            <p>
              Infraestrutura e DevOps (Full-Cycle): Possuo domínio do ciclo de
              implantação e disponibilidade de aplicações. Tenho experiência
              prática na conteinerização de serviços com Docker e na automação
              de pipelines de CI/CD via GitHub Actions. Gerencio o fluxo de
              entrega utilizando Nginx como servidor web, proteção e performance
              via Cloudflare, com implantações realizadas em infraestrutura
              Oracle Cloud.
            </p>
          </section>
        </div>
      </section>
      <section className="h-[95%] flex flex-col items-center">
        <div className="flex flex-col w-[80%]">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Icon name="file-code" />
            Projetos
          </h2>
        </div>
      </section>
      <section></section>
    </>
  );
}
