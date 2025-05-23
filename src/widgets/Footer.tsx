import HStack from "@/shared/components/Container/HStack";
import FooterLayout from "@/shared/components/Layout/FooterLayout";
import Text from "@/shared/components/Primitive/Text";

export function Footer() {
  return (
    <HStack as={FooterLayout} className="mt-24" justify="center" items="center">
      <Text>Edit by Jungheon Lee</Text>
    </HStack>
  );
}
