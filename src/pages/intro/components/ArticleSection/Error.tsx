"use client";

import { useEffect } from "react";
import { toast } from "sonner";

import ArticleSectionSkeleton from "./Skeleton";
import { useRouter } from "next/navigation";

export default function ArticleSectionError() {
  const router = useRouter();

  useEffect(() => {
    toast.error("아티클을 불러오지 못했습니다.", {
      description: "페이지를 새로고침하여 다시 시도해보세요.",
      action: {
        label: "재시도",
        onClick: () => router.refresh(),
      },
      duration: Infinity,
    });
  }, [router]);

  return <ArticleSectionSkeleton />;
}
