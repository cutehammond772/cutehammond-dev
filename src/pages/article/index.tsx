import ResponsiveCenter from "@/shared/components/Responsive/Center";
import { loader } from "@/shared/lib/loader";
import { github } from "@/features/article/loaders";

import ArticleBody from "@/features/article/components/server/ArticleBody";

import { ArticleParams } from "./types/article-params";
import ArticleBanner from "./components/ArticleBanner";

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
    <ResponsiveCenter className="mt-24">
      <ArticleBanner
        tag={article.tag}
        createdDate={article.createdDate}
        title={article.title}
      />
      <article>
        <ArticleBody markdown={article.content} />
      </article>
    </ResponsiveCenter>
  );
}
