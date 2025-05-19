import Link from "next/link";
import ThemeToggle from "@/features/theme/components/ThemeToggle";
import ResponsiveBody from "@/shared/components/Responsive/Body";
import ResponsiveCenter from "@/shared/components/Responsive/Center";
import HStack from "@/shared/components/Container/HStack";

export default function Header() {
  return (
    <ResponsiveBody
      as="header"
      className="bg-background/50 sticky top-0 z-10 font-sans backdrop-blur-sm"
    >
      <HStack
        as={ResponsiveCenter}
        items="center"
        justify="between"
        className="p-4 md:p-8"
      >
        <Link href="/" className="text-xl font-extrabold md:text-2xl">
          cutehammond.dev
        </Link>
        <HStack items="center" gap={4}>
          <ThemeToggle />
        </HStack>
      </HStack>
    </ResponsiveBody>
  );
}
