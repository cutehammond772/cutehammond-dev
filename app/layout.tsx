import type { Metadata } from "next";

import "@/app/styles/globals.css";

import ThemeProvider from "@/app/providers/ThemeProvider";
import JotaiProvider from "@/app/providers/JotaiProvider";
import Header from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { monoplex, pretendard, ridibatang } from "@/app/styles/font";
import { cn } from "@/shared/lib/shadcn-utils";
import { Toaster } from "@/shared/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";
import PageLayout from "@/shared/components/Layout/PageLayout";

export const metadata: Metadata = {
  title: "cutehammond.dev",
  description: "front-end developing hamster.",
  openGraph: {
    title: "cutehammond.dev",
    description: "front-end developing hamster.",
    url: "https://cutehammond.dev",
    siteName: "cutehammond's dev blog",
    locale: "ko_KR",
    type: "website",
  },
  icons: {
    shortcut: "https://cutehammond.dev/favicon.ico",
  },
};

export default async function Layout({ children }: React.PropsWithChildren) {
  return (
    <html
      lang="ko"
      className={cn(
        pretendard.variable,
        monoplex.variable,
        ridibatang.variable,
        "scroll-smooth"
      )}
      suppressHydrationWarning
    >
      <PageLayout>
        <JotaiProvider>
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
            <Toaster />
            <NextTopLoader showSpinner={false} color="#DB7406" />
          </ThemeProvider>
        </JotaiProvider>
      </PageLayout>
    </html>
  );
}
