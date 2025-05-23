import { RefreshCwIcon } from "lucide-react";

import { Skeleton } from "@/shared/components/ui/skeleton";
import VStack from "@/shared/components/Container/VStack";
import HStack from "@/shared/components/Container/HStack";

import ArticleCardSkeleton from "../ArticleCard/Skeleton";
import H1 from "@/shared/components/Primitive/H1";

export default function ArticleSectionSkeleton() {
  return (
    <VStack gap={8}>
      <VStack gap={4}>
        <H1>최근 작성된 글</H1>
        <HStack gap={2} items="center" className="text-muted-foreground">
          <RefreshCwIcon className="h-4 w-4" />
          <Skeleton className="h-5 w-32" />
        </HStack>
      </VStack>
      <VStack gap={6}>
        {Array.from({ length: 6 }).map((_, index) => (
          <ArticleCardSkeleton key={index} />
        ))}
      </VStack>
    </VStack>
  );
}
