import ArticleCardSkeleton from "@/features/article/components/ArticleCardSkeleton";

const cards = [1, 2, 3, 4, 5, 6];

export default function LoadingPage() {
  return (
    <>
      <div className="f3-bold mt-24 mb-8 animate-pulse px-4 md:mt-48 md:px-0">
        최근 작성된 글
      </div>
      <div className="flex flex-col gap-6">
        {cards.map((key) => (
          <ArticleCardSkeleton key={key} />
        ))}
      </div>
    </>
  );
}
