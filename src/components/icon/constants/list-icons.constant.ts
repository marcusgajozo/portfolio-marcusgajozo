import { lazy } from "react";

export const listIconsConstant = {
  home: lazy(() =>
    import("raster-react").then(({ HomeIcon }) => ({
      default: HomeIcon,
    })),
  ),
  folder: lazy(() =>
    import("raster-react").then(({ FileCodeIcon }) => ({
      default: FileCodeIcon,
    })),
  ),
  suitcase: lazy(() =>
    import("raster-react").then(({ FoldersIcon }) => ({
      default: FoldersIcon,
    })),
  ),
  "mail-right": lazy(() =>
    import("raster-react").then(({ MailIcon }) => ({
      default: MailIcon,
    })),
  ),
  moon: lazy(() =>
    import("raster-react").then(({ MoonIcon }) => ({
      default: MoonIcon,
    })),
  ),
  sun: lazy(() =>
    import("raster-react").then(({ SunIcon }) => ({
      default: SunIcon,
    })),
  ),
} as const;
// import { Heart } from 'raster-react';
