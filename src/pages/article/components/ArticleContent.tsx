import Markdown from "@/shared/components/Markdown";
import { CodeHikeConfig, recmaCodeHike, remarkCodeHike } from "codehike/mdx";
import { compileMDX } from "next-mdx-remote/rsc";

const chConfig: CodeHikeConfig = {
  components: { code: "Code" },
};

export default async function ArticleContent({
  mdxContent,
}: {
  mdxContent: string;
}) {
  const mdx = await compileMDX({
    source: mdxContent,
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
