import { MDXComponents } from "mdx/types";
import { cn } from "@/shared/lib/shadcn-utils";
import Paragraph from "../Primitive/Paragraph";
import LinkButton from "../LinkButton";

export default {
  p: ({ className, ...props }) => (
    <Paragraph className={cn(className)} {...props} />
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
    <hr className={cn("border-border my-8 border-t", className)} {...props} />
  ),
  a: ({ ...props }) => <LinkButton {...props} />,
} satisfies MDXComponents;
