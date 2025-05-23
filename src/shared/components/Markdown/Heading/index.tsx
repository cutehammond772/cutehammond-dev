import { cn } from "@/shared/lib/shadcn-utils";
import type { MDXComponents } from "mdx/types";
import HeadingWithId from "./HeadingWithId";
import H1 from "../../Primitive/H1";
import H2 from "../../Primitive/H2";
import H3 from "../../Primitive/H3";

export default {
  h1: ({ className, ...props }) => (
    <HeadingWithId as={H1} className={cn("my-8", className)} {...props} />
  ),
  h2: ({ className, ...props }) => (
    <HeadingWithId as={H2} className={cn("my-8", className)} {...props} />
  ),
  h3: ({ className, ...props }) => (
    <HeadingWithId as={H3} className={cn("my-8", className)} {...props} />
  ),
} satisfies MDXComponents;
