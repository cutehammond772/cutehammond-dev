import type { MDXComponents } from "mdx/types";
import content from "./content";
import heading from "./heading";
import table from "./table";
import code from "./code";

export default {
  ...heading,
  ...table,
  ...content,
  ...code,
} satisfies MDXComponents;
