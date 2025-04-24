import { Metadata } from "next";

import { list, load } from "@/utils/article/github";
import { convertDate } from "@/utils/date";

import ArticleBody from "@/features/article/components/ArticleBody";

export interface ArticlePageParams {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  props: ArticlePageParams
): Promise<Metadata> {
  const params = await props.params;
  return {
    title: decodeURI(params.slug),
  };
}

// 등록된 글을 모두 가져옵니다.
export async function generateStaticParams() {
  return (await list({})).articles.map((title) => ({ slug: title }));
}

export default async function Page(props: ArticlePageParams) {
  const params = await props.params;
  const title = decodeURI(params.slug);
  const article = await load({ title });

  return (
    <>
      <div className="bg-beige-300 dark:bg-charcoal-700 flex flex-col items-center gap-2 px-4 pt-48 pb-4">
        <span className="f1-bold text-center leading-normal break-keep md:pb-8">
          {title}
        </span>
        <span className="fp-bold flex flex-row gap-2 text-center">
          {convertDate(article.createdDate)} 생성
          <span className="text-text-700 dark:text-text-300">
            ({convertDate(article.modifiedDate)} 수정)
          </span>
        </span>
        <span className="fp-bold flex flex-row flex-wrap justify-center gap-2">
          {article.tag.map((tag) => (
            <span
              key={tag}
              className="bg-beige-500 dark:bg-charcoal-500 px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </span>
        <hr className="bg-layer h-[2px] border-0" />
      </div>
      <article className="px-4 md:px-0">
        <ArticleBody markdown={article.markdown} />
      </article>
    </>
  );
}
