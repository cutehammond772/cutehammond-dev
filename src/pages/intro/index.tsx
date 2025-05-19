import VStack from "@/shared/components/Container/VStack";
import HeroSection from "./components/HeroSection";
import ArticleSection from "./components/ArticleSection";
import AsyncErrorBoundary from "@/shared/components/AsyncErrorBoundary";
import ArticleSectionSkeleton from "./components/ArticleSection/Skeleton";
import ArticleSectionError from "./components/ArticleSection/Error";

export default function IntroPage() {
  return (
    <VStack gap={32}>
      <HeroSection />
      <AsyncErrorBoundary
        loading={<ArticleSectionSkeleton />}
        error={<ArticleSectionError />}
      >
        <ArticleSection />
      </AsyncErrorBoundary>
    </VStack>
  );
}
