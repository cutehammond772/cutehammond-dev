import type { MDXComponents } from "mdx/types";
import content from "./content";
import heading from "./heading";
import table from "./table";
import Code from "./Code";

export default {
  ...heading,
  ...table,
  ...content,
  ...Code,
} satisfies MDXComponents;
