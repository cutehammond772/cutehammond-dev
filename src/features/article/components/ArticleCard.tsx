import { Clock } from "lucide-react";

import { Badge } from "@/shared/components/ui/badge";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { convertDate } from "@/shared/lib/date";
import HStack from "@/shared/components/Container/HStack";
import VStack from "@/shared/components/Container/VStack";
import Text from "@/shared/components/Primitive/Text";
import H2 from "@/shared/components/Primitive/H2";

export default function ArticleCard({
  tag,
  createdDate,
  title,
}: {
  tag: string[];
  createdDate: Date;
  title: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <H2>{title}</H2>
        </CardTitle>
      </CardHeader>
      <VStack as={CardFooter} gap={2}>
        <HStack gap={2} items="center">
          <Clock size={16} />
          <Text variant="muted">{convertDate(createdDate.toDateString())}</Text>
        </HStack>
        <HStack gap={2} items="center" wrap="wrap">
          {tag.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </HStack>
      </VStack>
    </Card>
  );
}
