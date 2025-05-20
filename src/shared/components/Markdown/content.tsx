import { cn } from "@/shared/lib/shadcn-utils";
import { Link2Icon } from "lucide-react";
import { MDXComponents } from "mdx/types";
import Link from "next/link";

export default {
  p: ({ className, ...props }) => (
    <p
      className={cn(
        "text-foreground font-serif text-base leading-loose break-keep",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn("my-8 list-inside list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn("my-8 list-inside list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li
      className={cn(
        "text-foreground font-serif text-base [&>p]:m-0 [&>p]:inline",
        className
      )}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "border-primary bg-muted/50 text-foreground my-8 border-l-4 px-4 py-4 font-serif",
        className
      )}
      {...props}
    />
  ),
  em: ({ className, ...props }) => (
    <em
      className={cn("text-foreground font-serif text-base", className)}
      {...props}
    />
  ),
  strong: ({ className, ...props }) => (
    <strong
      className={cn("text-foreground font-sans text-base", className)}
      {...props}
    />
  ),
  hr: ({ className, ...props }) => (
    <hr
      className={cn("border-border/40 my-8 border-t", className)}
      {...props}
    />
  ),
  a: ({ className, children, ...props }) => (
    <Link
      className={cn(
        "text-foreground border-foreground hover:border-primary hover:text-primary border-1 border-l-4 px-2 py-1 font-serif text-base transition-colors",
        className
      )}
      {...props}
    >
      <Link2Icon className="mr-2 inline-block h-4 w-4" />
      <span>{children}</span>
    </Link>
  ),
} satisfies MDXComponents;
