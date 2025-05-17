import Link from "next/link";
import { Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";

interface Props {
  title: string;
  createdDate: Date;
  tags: string[];
}

export default function ArticleCard({ title, createdDate, tags }: Props) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link href={`/article/${title}`} className="block h-full">
        <CardHeader>
          <CardTitle className="line-clamp-1">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-muted-foreground flex items-center text-sm">
            <Clock className="mr-2 h-4 w-4" />
            <span>{formatDistanceToNow(createdDate, { addSuffix: true })}</span>
          </div>
        </CardContent>
        {tags && tags.length > 0 && (
          <CardFooter>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardFooter>
        )}
      </Link>
    </Card>
  );
}
