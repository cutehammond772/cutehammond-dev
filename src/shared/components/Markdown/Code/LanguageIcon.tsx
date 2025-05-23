import * as SimpleIcons from "@icons-pack/react-simple-icons";
import { Code } from "lucide-react";

interface Props {
  lang: string;
  size?: number;
}

const mappings: Record<string, SimpleIcons.IconType> = {
  javascript: SimpleIcons.SiJavascript,
  js: SimpleIcons.SiJavascript,
  typescript: SimpleIcons.SiTypescript,
  ts: SimpleIcons.SiTypescript,
  python: SimpleIcons.SiPython,
  py: SimpleIcons.SiPython,
  java: SimpleIcons.SiOpenjdk,
  c: SimpleIcons.SiC,
  cpp: SimpleIcons.SiCplusplus,
  "c++": SimpleIcons.SiCplusplus,
  go: SimpleIcons.SiGo,
  rust: SimpleIcons.SiRust,
  ruby: SimpleIcons.SiRuby,
  rb: SimpleIcons.SiRuby,
  php: SimpleIcons.SiPhp,
  swift: SimpleIcons.SiSwift,
  kotlin: SimpleIcons.SiKotlin,
  dart: SimpleIcons.SiDart,
  scala: SimpleIcons.SiScala,
  perl: SimpleIcons.SiPerl,
  haskell: SimpleIcons.SiHaskell,
  elixir: SimpleIcons.SiElixir,
  lua: SimpleIcons.SiLua,
  clojure: SimpleIcons.SiClojure,
  r: SimpleIcons.SiR,
};

export default function LanguageIcon({ lang, size }: Props) {
  const IconComponent = mappings[lang];

  if (!IconComponent) {
    return <Code size={size} />;
  }

  return <IconComponent size={size} />;
}
