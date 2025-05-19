import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/shared/components/ui/card";
import { Skeleton } from "@/shared/components/ui/skeleton";
import HStack from "@/shared/components/Container/HStack";

export default function ArticleCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <Skeleton className="h-7 w-3/4" />
      </CardHeader>

      <CardContent>
        <HStack gap={1} items="center" className="text-muted-foreground">
          <Skeleton className="h-5 w-4" />
          <Skeleton className="h-5 w-32" />
        </HStack>
      </CardContent>

      <CardFooter>
        <HStack gap={1} items="center" wrap="wrap">
          <Skeleton className="h-6.5 w-16 rounded-full" />
          <Skeleton className="h-6.5 w-20 rounded-full" />
          <Skeleton className="h-6.5 w-12 rounded-full" />
        </HStack>
      </CardFooter>
    </Card>
  );
}
