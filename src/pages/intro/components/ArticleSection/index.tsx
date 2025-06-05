import Link from "next/link";
import { RefreshCwIcon } from "lucide-react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

import { github } from "@/features/article/loaders";
import { loader } from "@/shared/lib/loader";
import VStack from "@/shared/components/Container/VStack";
import HStack from "@/shared/components/Container/HStack";

import H1 from "@/shared/components/Primitive/H1";
import Text from "@/shared/components/Primitive/Text";
import ArticleCard from "@/features/article/components/ArticleCard";
import RefreshButton from "../RefreshButton";
import { Button } from "@/shared/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/ui/popover";
import H3 from "@/shared/components/Primitive/H3";

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

  const currentDate = format(new Date(), "yyyy/MM/dd", {
    locale: ko,
  });

  return (
    <VStack gap={8}>
      <HStack gap={4} justify="between" items="center">
        <H1>최근 작성된 글</H1>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary">
              <RefreshCwIcon className="h-4 w-4" />
              {currentDate}에 갱신됨
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <VStack gap={4} items="stretch">
              <H3>글이 업데이트되지 않았나요?</H3>
              <Text>아래의 새로고침 버튼을 클릭하여 최근 글을 불러오세요.</Text>
              <form action={revalidate}>
                <RefreshButton />
              </form>
            </VStack>
          </PopoverContent>
        </Popover>
      </HStack>
      <VStack gap={6}>
        {articles.map((article) => (
          <Link href={`/article/${article.title}`} key={article.title}>
            <ArticleCard {...article} />
          </Link>
        ))}
      </VStack>
    </VStack>
  );
}
