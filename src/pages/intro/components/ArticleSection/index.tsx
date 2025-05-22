import { RefreshCwIcon } from "lucide-react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

import { github } from "@/features/article/loaders";
import { loader } from "@/shared/lib/loader";
import VStack from "@/shared/components/Container/VStack";
import HStack from "@/shared/components/Container/HStack";

import ArticleCard from "../ArticleCard";
import H1 from "@/shared/components/Primitive/H1";
import Text from "@/shared/components/Primitive/Text";

const resource = github.articles({
  user: "cutehammond772",
  repo: "blog-articles",
  path: "articles",
});

export default async function ArticleSection() {
  const [load] = loader(resource);
  const [articles] = await load();

  // 날짜 순으로 정렬한다. (가장 늦게 나온 게시글이 먼저 오도록 한다.)
  articles.sort(
    (a, b) =>
      new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
  );

  const currentDate = format(new Date(), "yyyy/MM/dd", {
    locale: ko,
  });

  return (
    <VStack gap={8}>
      <VStack gap={4}>
        <H1>최근 작성된 글</H1>
        <HStack gap={2} items="center">
          <RefreshCwIcon className="h-4 w-4" />
          <Text variant="muted">{currentDate}에 갱신됨</Text>
        </HStack>
      </VStack>
      <VStack gap={6}>
        {articles.map(({ title, createdDate, tag }) => (
          <ArticleCard
            key={title}
            title={title}
            createdDate={createdDate}
            tags={tag}
          />
        ))}
      </VStack>
    </VStack>
  );
}
