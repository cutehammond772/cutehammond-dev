import VStack from "@/shared/components/Container/VStack";
import HeroSection from "./components/HeroSection";
import ArticleSection from "./components/ArticleSection";
import AsyncErrorBoundary from "@/shared/components/AsyncErrorBoundary";
import ArticleSectionSkeleton from "./components/ArticleSection/Skeleton";
import ArticleSectionError from "./components/ArticleSection/Error";
import ResponsiveCenter from "@/shared/components/Responsive/Center";

export default function IntroPage() {
  return (
    <ResponsiveCenter>
      <VStack gap={32}>
        <HeroSection />
        <AsyncErrorBoundary
          loading={<ArticleSectionSkeleton />}
          error={<ArticleSectionError />}
        >
          <ArticleSection />
        </AsyncErrorBoundary>
      </VStack>
    </ResponsiveCenter>
  );
}
