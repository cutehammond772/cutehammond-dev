import type { Metadata } from "next";

import "@/app/styles/globals.css";

import ThemeProvider from "@/app/providers/ThemeProvider";
import JotaiProvider from "@/app/providers/JotaiProvider";
import Header from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { monoplex, pretendard, ridibatang } from "@/app/styles/font";
import { cn } from "@/shared/lib/shadcn-utils";

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
        ridibatang.variable
      )}
      suppressHydrationWarning
    >
      <body className="grid min-h-screen grid-cols-[0_1fr_0] grid-rows-[auto_1fr_auto] md:grid-cols-[1fr_4fr_1fr] lg:grid-cols-[1fr_2fr_1fr]">
        <JotaiProvider>
          <ThemeProvider>
            <Header />
            <main className="col-span-1 col-start-2">{children}</main>
            <Footer />
          </ThemeProvider>
        </JotaiProvider>
      </body>
    </html>
  );
}
