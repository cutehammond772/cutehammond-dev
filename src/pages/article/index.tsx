import { loader } from "@/shared/lib/loader";
import MainLayout from "@/shared/components/Layout/MainLayout";
import ArticleCard from "@/features/article/components/ArticleCard";
import ArticleContent from "@/features/article/components/ArticleContent";
import Anchor from "@/features/article/components/Anchor";
import { github } from "@/features/article/loaders";

import { ArticleParams } from "./types/article-params";
import RightSideLayout from "@/shared/components/Layout/RightSideLayout";
import ScrollProgress from "@/shared/components/ScrollProgress";

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
    <>
      <ScrollProgress />
      <RightSideLayout>
        <Anchor mdxContent={article.content} />
      </RightSideLayout>
      <MainLayout>
        <ArticleCard {...article} />
        <ArticleContent mdxContent={article.content} />
      </MainLayout>
    </>
  );
}
