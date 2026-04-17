import { Section, SectionHeader } from "@/components/section";
import Image from "next/image";
import Link from "next/link";

// TODO: cria um componente card
// TODO: fazer vídeo/giff para colocar dos projetos
// TODO: criar rota para projetos e pesquisa de projetos

interface ProjectsSectionProps {
  number: number;
}

export function ProjectsSection({ number }: ProjectsSectionProps) {
  return (
    <Section className="mt-30">
      <SectionHeader
        title="Engenharia e Projetos Open source"
        number={number}
      />
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard />
        <ProjectCard />
      </section>
    </Section>
  );
}

function ProjectCard() {
  return (
    <div className="flex flex-col gap-2 border-2 rounded-lg overflow-hidden w-full">
      <div className="relative w-full aspect-video">
        <Image
          src="/ecobrasil-aventura.png"
          alt="EcoBrasil Aventura"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-xl font-bold">EcoBrasil Aventura</h3>
        <div></div>
        <p>
          Projeto inovador de Web 3D focado em educação ambiental, utilizando
          React Three Fiber para criar experiências imersivas otimizadas para
          hardware de baixo desempenho.
        </p>
        <div className="flex gap-4 mt-2">
          <Link href="/projetos/ecobrasil-aventura" className="text-sm">
            Ver Código-fonte
          </Link>
          <Link href="/projetos/ecobrasil-aventura" className="text-sm">
            Acessar projeto
          </Link>
        </div>
      </div>
    </div>
  );
}
