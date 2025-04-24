import { getArticleMetadata } from "@/pages/article/utils/get-article-metadata";
import { ArticleParams } from "@/pages/article/types/article-params";
import { getArticleParams } from "@/pages/article/utils/get-article-params";
import ArticlePage from "@/pages/article";

export async function generateMetadata(props: ArticleParams) {
  return getArticleMetadata(props);
}

export async function generateStaticParams() {
  return getArticleParams();
}

export default async function Page(props: ArticleParams) {
  return <ArticlePage {...props} />;
}
