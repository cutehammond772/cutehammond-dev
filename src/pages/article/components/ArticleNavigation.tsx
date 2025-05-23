import HStack from "@/shared/components/Container/HStack";
import { Heart, MessageCircleIcon } from "lucide-react";

export default function ArticleNavigation() {
  return (
    <HStack
      className="pointer-events-none sticky bottom-0 h-18"
      justify="center"
      items="center"
    >
      <div className="hidden max-w-1/3 md:block">
        <HStack
          className="bg-background pointer-events-auto mx-2 rounded-md border-1 px-4 py-2 shadow-lg"
          items="center"
          justify="center"
          gap={2}
        >
          <Heart size={16} />
          <span className="text-sm">123</span>
          <MessageCircleIcon size={16} />
          <span className="text-sm">123</span>
        </HStack>
      </div>
    </HStack>
  );
}
