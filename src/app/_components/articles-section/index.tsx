import { Section } from "@/components/section";

// TODO: cria seção de artigos

export function ArticlesSection() {
  return (
    <Section className="h-[80%] flex flex-col gap-3 mt-10 justify-center items-center">
      <h2 className="text-3xl font-medium">Artigos</h2>
      <p className="max-w-2xl text-center">
        Sinta-se à vontade para entrar em contato e conversarmos mais sobre seus
        projetos.
      </p>
    </Section>
  );
}
