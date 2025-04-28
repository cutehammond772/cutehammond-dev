import { list } from "@/features/article/utils/github";
import { ArticleParams } from "../types/article-params";

export async function getArticleParams() {
  return (await list({})).articles.map(
    (title) => ({ slug: title }) satisfies Awaited<ArticleParams["params"]>
  );
}
