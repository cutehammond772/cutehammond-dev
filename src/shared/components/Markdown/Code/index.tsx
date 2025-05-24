import { highlight, Pre, RawCode } from "codehike/code";
import { MDXComponents } from "mdx/types";
import VStack from "@/shared/components/Container/VStack";
import HStack from "@/shared/components/Container/HStack";

import lineNumbers from "./handlers/line-numbers";
import CodeTitle from "./CodeTitle";
import CopyButton from "./CopyButton";
import wordWrap from "./handlers/word-wrap";

async function Code({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, "monokai");

  return (
    <>
      <div
        className="border-primary h-6 rounded-t-md border-x-4 border-t-4 p-4"
        style={highlighted.style}
      />
      <div className="relative">
        <Pre
          code={highlighted}
          style={highlighted.style}
          handlers={[lineNumbers, wordWrap]}
          className="border-primary border-x-4 font-mono text-sm whitespace-break-spaces md:text-base"
        />
        <VStack className="bg-background sticky bottom-0 h-24">
          <div
            className="border-primary h-6 rounded-b-md border-x-4 border-b-4"
            style={highlighted.style}
          />
          <HStack items="center" gap={2} className="grow">
            <CopyButton content={highlighted.code}>
              <CodeTitle meta={highlighted.meta} lang={highlighted.lang} />
            </CopyButton>
          </HStack>
        </VStack>
      </div>
    </>
  );
}

export default {
  Code,
} satisfies MDXComponents;
