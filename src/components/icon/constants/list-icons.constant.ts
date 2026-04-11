import { lazy } from "react";

export const listIconsConstant = {
  home: lazy(() =>
    import("pixelarticons/react").then(({ Home }) => ({
      default: Home,
    })),
  ),
  folder: lazy(() =>
    import("pixelarticons/react").then(({ Folder }) => ({
      default: Folder,
    })),
  ),
  suitcase: lazy(() =>
    import("pixelarticons/react").then(({ Suitcase }) => ({
      default: Suitcase,
    })),
  ),
  "mail-right": lazy(() =>
    import("pixelarticons/react").then(({ MailRight }) => ({
      default: MailRight,
    })),
  ),
  moon: lazy(() =>
    import("pixelarticons/react").then(({ Moon }) => ({
      default: Moon,
    })),
  ),
} as const;
