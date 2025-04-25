import { Metadata } from "next";
import { ArticleParams } from "../types/article-params";

export async function getArticleMetadata(
  props: ArticleParams
): Promise<Metadata> {
  const { slug } = await props.params;

  return {
    title: decodeURI(slug),
  };
}
