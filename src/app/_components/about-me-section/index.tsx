import { Section, SectionHeader } from "@/components/section";
import Image from "next/image";

interface AboutMeSectionProps {
  number: number;
}

export function AboutMeSection({ number }: AboutMeSectionProps) {
  return (
    <Section>
      <SectionHeader title="Sobre mim" number={number} />
      <section className="flex flex-wrap justify-center items-center gap-10">
        <section className="flex flex-col flex-1 gap-3 leading-relaxed">
          <p>
            Desenvolvedor de software com experiência na construção de sistemas
            governamentais e aplicações web de alta performance. Especializado
            no ecossistema React e Next.js com foco em arquitetura MVVM, Atomic
            Design e gerenciamento de estado eficiente com TanStack Query e
            Zustand.
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
            Engenharia de Software: Implementação de padrões de design, tipagem
            estrita com TypeScript e validação de dados com Zod, reduzindo a
            incidência de bugs através de código limpo e escalável.
          </p>
          <p>
            Web 3D e Inovação: Liderança técnica no projeto EcoBrasil Aventura,
            utilizando React Three Fiber para criar experiências tridimensionais
            otimizadas para hardware de baixo desempenho.
          </p>
          <p>
            Infraestrutura e DevOps (Full-Cycle): Possuo domínio do ciclo de
            implantação e disponibilidade de aplicações. Tenho experiência
            prática na conteinerização de serviços com Docker e na automação de
            pipelines de CI/CD via GitHub Actions. Gerencio o fluxo de entrega
            utilizando Nginx como servidor web, proteção e performance via
            Cloudflare, com implantações realizadas em infraestrutura Oracle
            Cloud.
          </p>
        </section>
        <div className="relative shrink-0 w-56 h-56 sm:w-80 sm:h-80">
          <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg">
            <Image
              src="/marcus-gajozo.png"
              alt="Foto de Marcus Gajozo"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 sm:right-2 sm:bottom-2 w-16 h-10 overflow-hidden rounded shadow-xl">
            <Image
              src="/flag-brazil.svg"
              alt="Bandeira do Brasil"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </Section>
  );
}
