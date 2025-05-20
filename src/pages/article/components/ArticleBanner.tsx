import { Badge } from "@/shared/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { convertDate } from "@/shared/lib/date";
import Markdown from "@/shared/components/Markdown";
import HStack from "@/shared/components/Container/HStack";
import VStack from "@/shared/components/Container/VStack";
import { Clock } from "lucide-react";

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
          <Markdown.h1>{title}</Markdown.h1>
        </CardTitle>
        <VStack as={CardDescription} gap={2}>
          <HStack gap={2} items="center">
            <Clock className="h-4 w-4" />
            <div className="text-foreground font-serif text-base">
              {convertDate(createdDate.toDateString())}
            </div>
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
