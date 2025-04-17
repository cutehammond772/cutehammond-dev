"use client";

import { useEffect } from "react";
import { atom, useAtomValue } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { THEMES, Theme } from "./theme";

export const Key = "theme";

function isValid(theme: string | null): theme is Theme {
  return !!theme && THEMES.includes(theme as Theme);
}

// Theme 로직은 Browser에서만 돌아가도록 해야 한다.
const store = typeof window !== "undefined" ? window.localStorage : null;

export const themeState = atomWithStorage<Theme>(Key, "System");

interface ThemeDataSet {
  theme?: Theme;
}

export default function ThemeContainer({ children }: React.PropsWithChildren) {
  const theme = useAtomValue(themeState);

  useEffect(() => {
    const dset: ThemeDataSet = document.documentElement.dataset;

    if (theme == "System") {
      const sysDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      dset.theme = sysDark ? "Dark" : "Light";
      return;
    }

    dset.theme = theme;
  }, [theme]);

  return <>{children}</>;
}
