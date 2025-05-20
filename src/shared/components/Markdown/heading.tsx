import { cn } from "@/shared/lib/shadcn-utils";
import type { MDXComponents } from "mdx/types";

export default {
  h1: ({ className, ...props }) => (
    <h1
      className={cn(
        "text-foreground my-8 font-sans text-2xl font-bold tracking-tight md:text-3xl",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "text-foreground my-8 font-sans text-xl font-semibold tracking-tight md:text-2xl",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "text-foreground my-8 font-sans text-lg font-semibold tracking-tight md:text-xl",
        className
      )}
      {...props}
    />
  ),
} satisfies MDXComponents;
