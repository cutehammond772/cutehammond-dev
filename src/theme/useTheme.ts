import { useCallback } from "react";
import { themeState } from "@/theme/ThemeContainer";
import { THEMES } from "./theme";
import { useAtom } from "jotai";

export default function useTheme() {
  const [theme, setTheme] = useAtom(themeState);

  const toggle = useCallback(() => {
    setTheme((currentTheme) => {
      const index = THEMES.findIndex((candidate) => candidate === currentTheme);

      // 유효하지 않은 테마인 경우 시스템 테마로 자동 적용된다.
      if (index < 0) return "System";

      return THEMES[(index + 1) % THEMES.length];
    });
  }, [setTheme]);

  return { toggle, theme, setTheme };
}
