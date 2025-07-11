import Link from "next/link";

import HStack from "@/shared/components/Container/HStack";
import VStack from "@/shared/components/Container/VStack";
import Text from "@/shared/components/Primitive/Text";
import { generateId } from "@/shared/lib/anchor/id";
import { extractHeadings } from "@/shared/lib/anchor/extractor";
import { HeadingMeta } from "@/shared/lib/anchor/types";

import Connection from "./Connection";

function indent(depth: HeadingMeta["depth"]) {
  switch (depth) {
    case 1:
      return "ml-0";
    case 2:
      return "ml-2.5";
    case 3:
      return "ml-5";
  }
}

function BlurBottom() {
  return (
    <div className="to-background pointer-events-none sticky bottom-0 z-10 h-8 w-full bg-gradient-to-b from-transparent from-10%">
      &nbsp;
    </div>
  );
}

function BlurTop() {
  return (
    <div className="from-background pointer-events-none sticky top-0 z-10 h-8 w-full bg-gradient-to-b from-10% to-transparent">
      &nbsp;
    </div>
  );
}

export default async function Anchor({ mdxContent }: { mdxContent: string }) {
  const headings = await extractHeadings(mdxContent);

  // Heading이 존재하지 않으면 렌더링하지 않는다.
  if (headings.length === 0) return null;

  const array = [...Array(headings.length * 2 - 1).keys()];

  return (
    <VStack
      justify="center"
      items="start"
      className="sticky top-0 mr-auto h-screen min-w-64 p-4"
    >
      <VStack
        items="start"
        className="relative max-h-128 overflow-y-auto"
        title="목차"
      >
        <BlurTop />
        {array.map((item) => {
          if (item % 2 === 0) {
            // 1. 짝수면 헤딩을 배치한다.
            const heading = headings[item / 2];
            const uniqueId = generateId(heading.content);

            return (
              <Link
                href={`#${uniqueId}`}
                key={uniqueId}
                className={`${indent(heading.depth)} block shrink-0 self-stretch`}
              >
                <HStack className="relative">
                  <Connection from={1} to={1} className="h-auto" />
                  <Text
                    size="sm"
                    variant="muted"
                    className="break-keep hover:underline"
                  >
                    {heading.content}
                  </Text>
                </HStack>
              </Link>
            );
          } else {
            // 2. 홀수면 연결선을 배치한다.
            const [prev, next] = [
              headings[(item - 1) / 2],
              headings[(item + 1) / 2],
            ];

            return (
              <Connection
                key={`connection-${prev.content}-${next.content}`}
                from={prev.depth}
                to={next.depth}
                className="stroke-primary overflow-hidden"
              />
            );
          }
        })}
        <BlurBottom />
      </VStack>
    </VStack>
  );
}
