import Link from "next/link";
import { Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import HStack from "@/shared/components/Container/HStack";

interface Props {
  title: string;
  createdDate: Date;
  tags: string[];
}

export default function ArticleCard({ title, createdDate, tags }: Props) {
  const hasTag = tags && tags.length > 0;
  const dateFromNow = formatDistanceToNow(createdDate, {
    addSuffix: true,
    locale: ko,
  });

  return (
    <Link href={`/article/${title}`}>
      <Card className="group hover:border-primary overflow-hidden transition-all hover:shadow-md">
        <CardHeader>
          <CardTitle className="group-hover:text-primary text-xl transition-colors">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <HStack gap={1} items="center" className="text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className="font-serif text-sm">{dateFromNow}에 작성됨</span>
          </HStack>
        </CardContent>

        {hasTag && (
          <CardFooter>
            <HStack gap={1} items="center" wrap="wrap">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="px-2 py-0.5 text-sm font-normal"
                >
                  {tag}
                </Badge>
              ))}
            </HStack>
          </CardFooter>
        )}
      </Card>
    </Link>
  );
}
