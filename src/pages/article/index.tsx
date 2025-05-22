import ArticleBody from "@/features/article/components/server/ArticleBody";
import { github } from "@/features/article/loaders";
import ResponsiveCenter from "@/shared/components/Responsive/Center";
import { loader } from "@/shared/lib/loader";

import ArticleBanner from "./components/ArticleBanner";
import { ArticleParams } from "./types/article-params";

export default async function ArticlePage(props: ArticleParams) {
  const { slug } = await props.params;

  const [load] = loader(
    github.article({
      user: "cutehammond772",
      repo: "blog-articles",
      path: "articles",
      name: decodeURI(slug),
    })
  );

  const [article] = await load();

  return (
    <ResponsiveCenter as="section" className="relative mt-24">
      <ArticleBanner
        tag={article.tag}
        createdDate={article.createdDate}
        title={article.title}
      />
      <ArticleBody markdown={article.content} />
    </ResponsiveCenter>
  );
}
