import { Section, SectionHeader } from "@/components/section";
import Image from "next/image";

export function AboutMeSection() {
  return (
    <Section className="flex justify-center items-center gap-10">
      <section className="flex flex-col flex-1">
        <SectionHeader title="Sobre mim" number={1} />
        <section className="mt-3 flex flex-col gap-3">
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
      </section>
      <div className=" relative rounded-full aspect-video overflow-hidden w-100 h-100">
        <Image
          src="/marcus-gajozo.png"
          alt="Foto de Marcus Gajozo"
          fill
          className="object-cover"
        />
      </div>
    </Section>
  );
}
