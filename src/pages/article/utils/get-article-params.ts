import { github } from "@/features/article/loaders";
import { loader } from "@/shared/utils/loader";
import { ArticleParams } from "../types/article-params";

export async function getArticleParams() {
  const [load] = loader(
    github.articles({
      user: "cutehammond772",
      repo: "blog-articles",
      path: "articles",
    })
  );

  const [articles] = await load();

  return articles.map(
    ({ title }) => ({ slug: title }) satisfies Awaited<ArticleParams["params"]>
  );
}
