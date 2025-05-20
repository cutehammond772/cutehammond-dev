import { Code } from "bright";
import { MDXComponents } from "mdx/types";

export default {
  code: (props) => (
    <Code
      {...props}
      theme={{
        light: "min-light",
        dark: "min-dark",
        lightSelector: "html.light",
      }}
      codeClassName="whitespace-pre-wrap"
      lineNumbers
    />
  ),
} satisfies MDXComponents;
