import { Icon } from "@/components/icon";
import { Section } from "@/components/section";
import Image from "next/image";

export function ProjectsSection() {
  return (
    <Section className="flex flex-col items-center mt-50">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Icon name="file-code" />
          Projetos
        </h2>
        <section className="mt-3 flex gap-3">
          <div className="flex flex-col gap-2 mt-3 border-2 rounded-lg overflow-hidden w-md">
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
              <p>
                Projeto inovador de Web 3D focado em educação ambiental,
                utilizando React Three Fiber para criar experiências imersivas
                otimizadas para hardware de baixo desempenho.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-3 border-2 rounded-lg overflow-hidden w-md">
            <div className="relative w-full aspect-video">
              <Image
                src="/padflow.png"
                alt="PadFlow"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-xl font-bold">PadFlow</h3>
              <p>
                Um controlador de áudio web para músicos, com pads contínuos e
                uma mesa de efeitos personalizável, controlável remotamente via
                smartphone.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-3 border-2 rounded-lg overflow-hidden w-md">
            <div className="relative w-full aspect-video">
              <Image
                src="/portfolio-blog.png"
                alt="Portfólio e Blog"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-xl font-bold">Portfólio e Blog</h3>
              <p>
                Um portfólio pessoal e blog, onde compartilho meus projetos e
                experiências, além de artigos sobre desenvolvimento de software
                e tecnologia.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Section>
  );
}
