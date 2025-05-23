import VStack from "@/shared/components/Container/VStack";
import HeroSection from "./components/HeroSection";
import ArticleSection from "./components/ArticleSection";
import AsyncErrorBoundary from "@/shared/components/AsyncErrorBoundary";
import ArticleSectionSkeleton from "./components/ArticleSection/Skeleton";
import ArticleSectionError from "./components/ArticleSection/Error";
import NoScriptAlert from "@/shared/components/NoScriptAlert";
import MainLayout from "@/shared/components/Layout/MainLayout";

export default function IntroPage() {
  return (
    <MainLayout>
      <VStack gap={32}>
        <HeroSection />
        <NoScriptAlert />
        <AsyncErrorBoundary
          loading={<ArticleSectionSkeleton />}
          error={<ArticleSectionError />}
        >
          <ArticleSection />
        </AsyncErrorBoundary>
      </VStack>
    </MainLayout>
  );
}
