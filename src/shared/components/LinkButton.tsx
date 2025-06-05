import { Link2Icon } from "lucide-react";
import NextLink, { LinkProps } from "next/link";
import { cn } from "@/shared/lib/shadcn-utils";
import Text from "./Primitive/Text";
import React from "react";

export default function LinkButton({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NextLink>) {
  return (
    <NextLink
      className={cn(
        "text-foreground border-foreground hover:border-primary hover:text-primary inline-flex items-center overflow-hidden border-1 border-l-4 px-2 py-1 font-serif text-base transition-colors",
        className
      )}
      {...props}
    >
      <Link2Icon className="mr-2 inline-block h-4 w-4" />
      <Text className="inline-block overflow-hidden text-ellipsis whitespace-nowrap">
        {children}
      </Text>
    </NextLink>
  );
}
