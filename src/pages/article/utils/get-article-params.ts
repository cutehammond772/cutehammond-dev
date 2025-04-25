import { list } from "@/utils/article/github";
import { ArticleParams } from "../types/article-params";

export async function getArticleParams() {
  return (await list({})).articles.map(
    (title) => ({ slug: title }) satisfies Awaited<ArticleParams["params"]>
  );
}
