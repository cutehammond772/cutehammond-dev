import type { MDXComponents } from "mdx/types";
import content from "./content";
import Heading from "./Heading";
import table from "./table";
import Code from "./Code";

export default {
  ...Heading,
  ...table,
  ...content,
  ...Code,
} satisfies MDXComponents;
