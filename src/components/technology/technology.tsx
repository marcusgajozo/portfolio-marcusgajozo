import Link from "next/link";
import { technologyIcons, technologyNames } from "./technology.constant";
import { Suspense } from "react";

interface TechnologyProps {
  url: string;
  technologyName: keyof typeof technologyIcons;
}

export function Technology({ url, technologyName }: TechnologyProps) {
  const Icon = technologyIcons[technologyName];
  const name = technologyNames[technologyName];

  return (
    <Link href={url} target="_blank" className="flex items-center gap-2 w-20">
      <span className="text-2xl">
        <Suspense
          fallback={<div className="w-8 h-8 rounded-full animate-pulse" />}
        >
          <Icon />
        </Suspense>
      </span>
      <span className="font-bold">{name}</span>
    </Link>
  );
}
