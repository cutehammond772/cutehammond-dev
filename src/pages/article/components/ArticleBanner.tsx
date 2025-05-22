import { Clock } from "lucide-react";

import { Badge } from "@/shared/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { convertDate } from "@/shared/lib/date";
import HStack from "@/shared/components/Container/HStack";
import VStack from "@/shared/components/Container/VStack";
import H1 from "@/shared/components/Primitive/H1";
import Text from "@/shared/components/Primitive/Text";

export default function ArticleBanner({
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
          <H1>{title}</H1>
        </CardTitle>
        <VStack as={CardDescription} gap={2}>
          <HStack gap={2} items="center">
            <Clock size={16} />
            <Text variant="muted">
              {convertDate(createdDate.toDateString())}
            </Text>
          </HStack>
          <HStack gap={2} items="center">
            {tag.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </HStack>
        </VStack>
      </CardHeader>
    </Card>
  );
}
