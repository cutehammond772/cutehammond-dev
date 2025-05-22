import { HighlightedCode } from "codehike/code";
import HStack from "../../Container/HStack";
import LanguageIcon from "./LanguageIcon";

type Props = Pick<HighlightedCode, "meta" | "lang">;

export default function CodeTitle({ meta, lang }: Props) {
  return (
    <HStack items="center" gap={2} className="mr-2 overflow-hidden">
      <LanguageIcon lang={lang} size={16} />
      <div className="overflow-hidden font-mono text-ellipsis whitespace-nowrap">
        {meta}
      </div>
    </HStack>
  );
}
