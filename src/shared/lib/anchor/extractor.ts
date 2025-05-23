import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import { visit } from "unist-util-visit";
import { HeadingMeta } from "./types";

export async function extractHeadings(mdxContent: string) {
  const headings: HeadingMeta[] = [];
  const root = unified().use(remarkParse).use(remarkMdx).parse(mdxContent);

  // MDX를 트리 형태로 파싱해 Root 노드에서 Heading 노드만 찾아냅니다.
  visit(root, "heading", ({ children, depth }) => {
    const content = children
      .filter((child) => child.type === "text")
      .map((child) => ("value" in child ? child.value : ""))
      .join("");

    headings.push(
      HeadingMeta.parse({
        depth,
        content,
      })
    );
  });

  return headings;
}
