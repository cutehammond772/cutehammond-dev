import type { Metadata } from "next";
import Link from "next/link";

import { pretendard } from "@/app/styles/font";
import "@/app/styles/globals.css";

import { Home } from "lucide-react";
import ThemeToggle from "@/features/theme/components/ThemeToggle";
import ThemeProvider from "@/app/providers/ThemeProvider";
import JotaiProvider from "@/app/providers/JotaiProvider";

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
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${pretendard.className} bg-beige-100 text-text-900 dark:bg-charcoal-900 dark:text-text-100 grid min-h-screen grid-cols-[0_1fr_0] grid-rows-[auto_1fr_auto] md:grid-cols-[1fr_4fr_1fr] lg:grid-cols-[1fr_2fr_1fr]`}
      >
        <JotaiProvider>
          <ThemeProvider
            attribute="data-theme"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header className="bg-beige-100 shadow-beige-100 dark:bg-charcoal-900 dark:shadow-charcoal-900 sticky top-0 z-10 col-span-1 col-start-2 flex flex-row items-center justify-between p-4 shadow-2xl md:px-0 md:py-8">
              <div className="flex flex-row items-center justify-center">
                <Link href="/" className="f3-bold self-start">
                  cutehammond.dev
                </Link>
              </div>
              <div className="flex flex-row gap-2">
                <ThemeToggle />
              </div>
            </header>
            <main className="col-span-1 col-start-2">{children}</main>
            <footer className="fp-bold col-span-3 mt-24 gap-2 px-8 py-4 text-center">
              Edit by Jungheon Lee
            </footer>
          </ThemeProvider>
        </JotaiProvider>
      </body>
    </html>
  );
}
