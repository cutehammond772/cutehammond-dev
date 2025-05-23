import { github } from "@/features/article/loaders";
import { loader } from "@/shared/lib/loader";
import MainLayout from "@/shared/components/Layout/MainLayout";
import LeftSideLayout from "@/shared/components/Layout/LeftSideLayout";

import ArticleBanner from "./components/ArticleBanner";
import { ArticleParams } from "./types/article-params";
import Anchor from "./components/Anchor";
import ArticleContent from "./components/ArticleContent";

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
      <LeftSideLayout>
        <Anchor mdxContent={article.content} />
      </LeftSideLayout>
      <MainLayout>
        <ArticleBanner
          tag={article.tag}
          createdDate={article.createdDate}
          title={article.title}
        />
        <ArticleContent mdxContent={article.content} />
      </MainLayout>
    </>
  );
}
