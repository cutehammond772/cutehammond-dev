import Link from "next/link";
import ThemeToggle from "@/features/theme/components/ThemeToggle";
import ResponsiveBody from "@/shared/components/Responsive/Body";
import ResponsiveCenter from "@/shared/components/Responsive/Center";
import HStack from "@/shared/components/Container/HStack";

export default function Header() {
  return (
    <ResponsiveBody
      as="header"
      className="bg-background/50 sticky top-0 z-10 p-8 font-sans backdrop-blur-sm"
    >
      <HStack as={ResponsiveCenter} items="center" justify="between">
        <Link href="/" className="self-start text-2xl font-extrabold">
          cutehammond.dev
        </Link>
        <HStack items="center" gap={4}>
          <ThemeToggle />
        </HStack>
      </HStack>
    </ResponsiveBody>
  );
}
