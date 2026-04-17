import Link from "next/link";
import { Suspense } from "react";
import { technologyUrls } from "./constants/technology-urls.constant";
import { technologyIcons } from "./constants/technology-icons.constant";
import { technologyNames } from "./constants/technology-names.constant";

interface TechnologyProps {
  technologyName: keyof typeof technologyIcons;
}

export function Technology({ technologyName }: TechnologyProps) {
  const Icon = technologyIcons[technologyName];
  const name = technologyNames[technologyName];
  const url = technologyUrls[technologyName];

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
