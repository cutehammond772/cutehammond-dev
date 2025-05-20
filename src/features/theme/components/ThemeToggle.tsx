"use client";

import { useMemo } from "react";
import { useTheme } from "next-themes";
import { Airplay, Moon, Sun } from "lucide-react";
import { ClientOnly } from "@/shared/components/ClientOnly";
import { Button } from "@/shared/components/ui/button";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";
import { Tooltip } from "@radix-ui/react-tooltip";
import { NEXT_THEME, Theme } from "../types/theme";

export default function ThemeToggle() {
  const { theme: nativeTheme, setTheme } = useTheme();
  const theme = useMemo(() => Theme.parse(nativeTheme), [nativeTheme]);

  return (
    <ClientOnly
      fallback={
        <Button variant="outline" title="Theme 설정">
          {ThemeIcons.system}
        </Button>
      }
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              onClick={() => setTheme(NEXT_THEME[theme])}
              title="Theme 설정"
            >
              {ThemeIcons[theme]}
            </Button>
          </TooltipTrigger>
          <TooltipContent>Theme 설정</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </ClientOnly>
  );
}

const ThemeIcons = {
  dark: <Moon />,
  light: <Sun />,
  system: <Airplay />,
} satisfies { [theme in Theme]: React.ReactNode };
