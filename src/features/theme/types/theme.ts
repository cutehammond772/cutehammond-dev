import * as z from "zod";

export const Theme = z.enum(["light", "dark", "system"]).default("system");
export type Theme = z.infer<typeof Theme>;

export const NEXT_THEME = {
  light: "dark",
  dark: "system",
  system: "light",
} satisfies { [theme in Theme]: Theme };
