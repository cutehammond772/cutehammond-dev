import Link from "next/link";
import ThemeToggle from "@/features/theme/components/ThemeToggle";

export default function Header() {
  return (
    <header className="font-sans-serif bg-background sticky top-0 z-10 col-span-1 col-start-2 flex flex-row items-center justify-between p-4 md:px-0 md:py-8">
      <div className="flex flex-row items-center justify-center">
        <Link href="/" className="self-start text-2xl">
          cutehammond.dev
        </Link>
      </div>
      <div className="flex flex-row gap-2">
        <ThemeToggle />
      </div>
    </header>
  );
}
