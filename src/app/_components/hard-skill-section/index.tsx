import { Section, SectionHeader } from "@/components/section";
import { Technology } from "@/components/technology";

// TODO: ajusta a lista de tecnologias
interface HardSkillSectionProps {
  number: number;
}

const hardSkills: HardSkillItemProps[] = [
  {
    url: "https://nextjs.org/",
    name: "Next.js",
    iconName: "nextjs",
  },
  {
    url: "https://react.dev/",
    name: "React",
    iconName: "react",
  },
  {
    url: "https://nestjs.com/",
    name: "NestJS",
    iconName: "nestjs",
  },
  {
    url: "https://www.docker.com/",
    name: "Docker",
    iconName: "docker",
  },
  {
    url: "https://www.postgresql.org/",
    name: "PostgreSQL",
    iconName: "postgresql",
  },
  {
    url: "https://graphql.org/",
    name: "GraphQL",
    iconName: "graphql",
  },
  {
    url: "https://gitlab.com/",
    name: "GitLab",
    iconName: "gitlab",
  },
  {
    url: "https://tanstack.com/query/latest",
    name: "TanStack Query",
    iconName: "tanstack-query",
  },
  {
    url: "https://github.com/",
    name: "GitHub",
    iconName: "github",
  },
  {
    url: "https://git-scm.com/",
    name: "Git",
    iconName: "git",
  },
];

export function HardSkillSection({ number }: HardSkillSectionProps) {
  return (
    <Section>
      <SectionHeader title="Hard Skill" number={number} />
      <section className="mt-2 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-4">
        {hardSkills.map((skill, index) => (
          <Technology
            key={`skill-${index}-${skill.name}`}
            url={skill.url}
            technologyName={skill.iconName}
          />
        ))}
      </section>
    </Section>
  );
}
