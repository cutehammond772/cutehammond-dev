import { load } from "@/utils/article/github";
import { ArticleParams } from "./types/article-params";
import { convertDate } from "@/utils/date";
import ArticleBody from "@/features/article/components/server/ArticleBody";

export default async function ArticlePage(props: ArticleParams) {
  const { slug } = await props.params;
  const title = decodeURI(slug);
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
