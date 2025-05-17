import { github } from "@/features/article/loaders";
import { loader } from "@/shared/lib/loader";
import RefreshButton from "./RefreshButton";
import ArticleCard from "./ArticleCard";

const resource = github.articles({
  user: "cutehammond772",
  repo: "blog-articles",
  path: "articles",
});

export default async function ArticleSection() {
  const [load, revalidate] = loader(resource);
  const [articles] = await load();

  // 날짜 순으로 정렬한다. (가장 늦게 나온 게시글이 먼저 오도록 한다.)
  articles.sort(
    (a, b) =>
      new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">최근 작성된 글</h1>
          <form action={revalidate}>
            <RefreshButton />
          </form>
        </div>
        <p className="text-muted-foreground text-sm">
          최근 업데이트: {new Date().toLocaleString("ko-KR")}
        </p>
      </div>
      <div className="flex flex-col gap-8">
        {articles.map(({ title, createdDate, tag }) => (
          <ArticleCard
            key={title}
            title={title}
            createdDate={createdDate}
            tags={tag}
          />
        ))}
      </div>
    </div>
  );
}
