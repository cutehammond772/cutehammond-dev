import { Clock } from "lucide-react";

export default function ArticleCardSkeleton() {
  return (
    <div className="bg-beige-300 dark:bg-charcoal-700 flex flex-col justify-between gap-2 p-4">
      <div className="bg-text-500 dark:bg-text-300 h-[24px] w-[20rem] animate-pulse md:h-[30px]" />
      <div className="flex animate-pulse flex-col gap-2">
        <span className="flex flex-row items-center gap-2">
          <Clock size={16} />{" "}
          <span className="bg-text-500 dark:bg-text-300 h-[24px] w-[10rem] md:h-[30px]" />
        </span>
        <div className="bg-beige-500 dark:bg-charcoal-500 self-start px-2 py-1">
          <div className="h-[24px] w-[4rem] md:h-[30px]" />
        </div>
      </div>
    </div>
  );
}
