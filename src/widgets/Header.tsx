import Link from "next/link";
import ThemeToggle from "@/features/theme/components/ThemeToggle";
import HStack from "@/shared/components/Container/HStack";
import HeaderLayout from "@/shared/components/Layout/HeaderLayout";
import H2 from "@/shared/components/Primitive/H2";

export default function Header() {
  return (
    <HeaderLayout className="bg-background/50 z-10 backdrop-blur-sm">
      <HStack items="center" justify="between">
        <H2 as={Link} href="/">
          cutehammond.dev
        </H2>
        <HStack items="center" gap={4}>
          <ThemeToggle />
        </HStack>
      </HStack>
    </HeaderLayout>
  );
}
