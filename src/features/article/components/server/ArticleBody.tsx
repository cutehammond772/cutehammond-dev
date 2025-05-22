import { compileMDX } from "next-mdx-remote/rsc";
import { CodeHikeConfig, recmaCodeHike, remarkCodeHike } from "codehike/mdx";

import Markdown from "@/shared/components/Markdown";

export interface ArticleBodyProps {
  markdown: string;
}

const chConfig: CodeHikeConfig = {
  components: { code: "Code" },
};

export default async function ArticleBody({ markdown }: ArticleBodyProps) {
  const mdx = await compileMDX({
    source: markdown,
    components: Markdown,
    options: {
      mdxOptions: {
        remarkPlugins: [[remarkCodeHike, chConfig]],
        recmaPlugins: [[recmaCodeHike, chConfig]],
      },
    },
  });

  return <article>{mdx.content}</article>;
}
