import { Section, SectionHeader } from "@/components/section";

// TODO: cria seção de artigos
// TODO: cria a rota para ler o artigoId
// TODO: criar um rota para listar e pesquisar os arquigos
// TODO: criar cards dos artigos
interface ArticlesSectionProps {
  number: number;
}

export function ArticlesSection({ number }: ArticlesSectionProps) {
  return (
    <Section className="h-[80%] flex flex-col gap-3 mt-10 justify-center items-center">
      <SectionHeader title="Artigos" number={number} />
      <section>
        <div></div>
      </section>
    </Section>
  );
}
