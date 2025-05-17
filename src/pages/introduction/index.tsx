import HeroSection from "./components/HeroSection";
import ArticleSection from "./components/ArticleSection";
import { Suspense } from "react";
import LoadingPage from "./components/LoadingPage";

export default async function IntroductionPage() {
  return (
    <div className="mt-32 flex flex-col gap-32">
      <HeroSection />
      <Suspense fallback={<LoadingPage />}>
        <ArticleSection />
      </Suspense>
    </div>
  );
}
