import { Section, SectionHeader } from "@/components/section";
import Link from "next/link";
import { lazy } from "react";

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
          <HardSkillItem
            key={`skill-${index}-${skill.name}`}
            url={skill.url}
            name={skill.name}
            iconName={skill.iconName}
          />
        ))}
      </section>
    </Section>
  );
}

const iconHardSkills = {
  nextjs: lazy(() =>
    import("react-icons/ri").then(({ RiNextjsFill }) => ({
      default: RiNextjsFill,
    })),
  ),
  react: lazy(() =>
    import("react-icons/si").then(({ SiReact }) => ({
      default: SiReact,
    })),
  ),
  nestjs: lazy(() =>
    import("react-icons/si").then(({ SiNestjs }) => ({
      default: SiNestjs,
    })),
  ),
  docker: lazy(() =>
    import("react-icons/di").then(({ DiDocker }) => ({
      default: DiDocker,
    })),
  ),
  postgresql: lazy(() =>
    import("react-icons/si").then(({ SiPostgresql }) => ({
      default: SiPostgresql,
    })),
  ),
  vite: lazy(() =>
    import("react-icons/si").then(({ SiVite }) => ({
      default: SiVite,
    })),
  ),
  express: lazy(() =>
    import("react-icons/si").then(({ SiExpress }) => ({
      default: SiExpress,
    })),
  ),
  typescript: lazy(() =>
    import("react-icons/si").then(({ SiTypescript }) => ({
      default: SiTypescript,
    })),
  ),
  dbeaver: lazy(() =>
    import("react-icons/si").then(({ SiDbeaver }) => ({
      default: SiDbeaver,
    })),
  ),
  javascript: lazy(() =>
    import("react-icons/si").then(({ SiJavascript }) => ({
      default: SiJavascript,
    })),
  ),
  threejs: lazy(() =>
    import("react-icons/tb").then(({ TbBrandThreejs }) => ({
      default: TbBrandThreejs,
    })),
  ),
  git: lazy(() =>
    import("react-icons/si").then(({ SiGit }) => ({
      default: SiGit,
    })),
  ),
  github: lazy(() =>
    import("react-icons/si").then(({ SiGithub }) => ({
      default: SiGithub,
    })),
  ),
  gitlab: lazy(() =>
    import("react-icons/si").then(({ SiGitlab }) => ({
      default: SiGitlab,
    })),
  ),
  html: lazy(() =>
    import("react-icons/si").then(({ SiHtml5 }) => ({
      default: SiHtml5,
    })),
  ),
  tailwind: lazy(() =>
    import("react-icons/si").then(({ SiTailwindcss }) => ({
      default: SiTailwindcss,
    })),
  ),
  bootstrap: lazy(() =>
    import("react-icons/si").then(({ SiBootstrap }) => ({
      default: SiBootstrap,
    })),
  ),
  graphql: lazy(() =>
    import("react-icons/si").then(({ SiGraphql }) => ({
      default: SiGraphql,
    })),
  ),
  "react-router": lazy(() =>
    import("react-icons/si").then(({ SiReactrouter }) => ({
      default: SiReactrouter,
    })),
  ),
  "tanstack-query": lazy(() =>
    import("react-icons/si").then(({ SiReactquery }) => ({
      default: SiReactquery,
    })),
  ),
  storybook: lazy(() =>
    import("react-icons/si").then(({ SiStorybook }) => ({
      default: SiStorybook,
    })),
  ),
  pnpm: lazy(() =>
    import("react-icons/si").then(({ SiPnpm }) => ({
      default: SiPnpm,
    })),
  ),
  yarn: lazy(() =>
    import("react-icons/si").then(({ SiYarn }) => ({
      default: SiYarn,
    })),
  ),
  oracle: lazy(() =>
    import("react-icons/gr").then(({ GrOracle }) => ({
      default: GrOracle,
    })),
  ),
  nvm: lazy(() =>
    import("react-icons/si").then(({ SiNvm }) => ({
      default: SiNvm,
    })),
  ),
  vscode: lazy(() =>
    import("react-icons/vsc").then(({ VscVscode }) => ({
      default: VscVscode,
    })),
  ),
  apollo: lazy(() =>
    import("react-icons/si").then(({ SiApollographql }) => ({
      default: SiApollographql,
    })),
  ),
  jest: lazy(() =>
    import("react-icons/si").then(({ SiJest }) => ({
      default: SiJest,
    })),
  ),
  "google-cloud": lazy(() =>
    import("react-icons/si").then(({ SiGooglecloud }) => ({
      default: SiGooglecloud,
    })),
  ),
} as const;

// import { SiGooglecloud } from "react-icons/si";

interface HardSkillItemProps {
  url: string;
  name: string;
  iconName: keyof typeof iconHardSkills;
}

export function HardSkillItem({ url, name, iconName }: HardSkillItemProps) {
  const Icon = iconHardSkills[iconName];

  return (
    <Link href={url} target="_blank" className="flex items-center gap-2 w-20">
      <span className="text-2xl">
        <Icon />
      </span>
      <span className="font-bold">{name}</span>
    </Link>
  );
}
