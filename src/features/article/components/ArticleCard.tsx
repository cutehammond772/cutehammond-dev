import React from "react";
import Link from "next/link";

import { Clock } from "lucide-react";

export interface Props {
  title: string;
  createdDate: string;
  tags: string[];
}

function ArticleCard({ title, createdDate, tags }: Props) {
  return (
    <Link href={`/article/${title}`}>
      <div className="bg-beige-300 dark:bg-charcoal-700 flex flex-col justify-between gap-2 p-4">
        <div className="fp-bold overflow-hidden text-nowrap text-ellipsis whitespace-nowrap">
          {title}
        </div>
        <div className="flex flex-col gap-2">
          <span className="flex flex-row items-center gap-2">
            <Clock size={16} /> {createdDate}
          </span>
          {tags && (
            <div className="fp-bold bg-beige-500 dark:bg-charcoal-500 self-start overflow-hidden px-2 py-1 text-center text-nowrap text-ellipsis whitespace-nowrap">
              {tags[0]}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default React.memo(ArticleCard);
