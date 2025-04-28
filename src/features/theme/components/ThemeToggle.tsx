"use client";

import * as z from "zod";
import { useMemo } from "react";
import { useTheme } from "next-themes";
import { Airplay, Moon, Sun } from "lucide-react";
import { ClientOnly } from "@/shared/utils/components/ClientOnly";

export default function ThemeToggle() {
  const { theme: nativeTheme, setTheme } = useTheme();
  const theme = useMemo(() => Theme.parse(nativeTheme), [nativeTheme]);

  return (
    <ClientOnly fallback={ThemeIcons.system}>
      <button onClick={() => setTheme(nextTheme[theme])} title="Theme 설정">
        {ThemeIcons[theme]}
      </button>
    </ClientOnly>
  );
}

export const Theme = z.enum(["light", "dark", "system"]).default("system");
export type Theme = z.infer<typeof Theme>;

export const nextTheme = {
  light: "dark",
  dark: "system",
  system: "light",
} satisfies { [theme in Theme]: Theme };

const ThemeIcons = {
  dark: <Moon />,
  light: <Sun />,
  system: <Airplay />,
} satisfies { [theme in Theme]: React.ReactNode };
