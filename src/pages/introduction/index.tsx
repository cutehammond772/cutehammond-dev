import { convertDate } from "@/shared/utils/date";
import * as GithubArticles from "@/shared/utils/article/github";
import ArticleCard from "@/features/article/components/ArticleCard";

export default async function IntroductionPage() {
  const articles = await Promise.all(
    (await GithubArticles.list({})).articles.map((title) =>
      GithubArticles.load({ title })
    )
  );

  // 날짜 순으로 정렬한다. (가장 늦게 나온 게시글이 먼저 오도록 한다.)
  articles.sort(
    (a, b) =>
      new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
  );

  return (
    <>
      <div className="f3-bold mt-24 mb-8 px-4 md:mt-48 md:px-0">
        최근 작성된 글
      </div>
      <div className="flex flex-col gap-6">
        {articles.map(({ title, createdDate, tag }) => (
          <ArticleCard
            title={title}
            createdDate={convertDate(createdDate)}
            tags={tag}
            key={title}
          />
        ))}
      </div>
    </>
  );
}
