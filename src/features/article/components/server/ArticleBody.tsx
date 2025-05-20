import remarkGfm from "remark-gfm";
import { MDXRemote } from "next-mdx-remote/rsc";

import Markdown from "@/shared/components/Markdown";

export interface ArticleBodyProps {
  markdown: string;
}

export default async function ArticleBody({ markdown }: ArticleBodyProps) {
  return (
    <MDXRemote
      source={markdown}
      components={Markdown}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      }}
    />
  );
}
