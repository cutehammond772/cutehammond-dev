import Link from "next/link";

import { MDXComponents } from "mdx/types";
import { Paperclip } from "react-feather";

import { Code } from "bright";

export const mdxComponents: MDXComponents = {
  a: ({ children, href }) => (
    <Link
      href={href || ""}
      className="bg-beige-500 dark:bg-charcoal-500 px-2 py-1"
    >
      <Paperclip className="inline py-1" /> {children}
    </Link>
  ),
  h1: ({ children, ...props }) => (
    <h1 {...props} className="f1-bold mt-8 mb-2 break-keep md:mt-12 md:mb-4">
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 {...props} className="f2-bold mt-8 mb-2 break-keep md:mt-12 md:mb-4">
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 {...props} className="f3-bold mt-8 mb-2 break-keep md:mt-12 md:mb-4">
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p {...props} className="fp-regular my-2 leading-8 break-keep md:my-4">
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul {...props} className="fp-regular my-2 list-disc break-keep">
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol {...props} className="fp-regular my-2 list-decimal break-keep">
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li {...props} className="my-2 ml-6 break-keep md:my-4">
      {children}
    </li>
  ),
  hr: ({ ...props }) => (
    <hr
      {...props}
      className="bg-text-900 dark:bg-text-100 my-2 h-[2px] border-0 md:my-4"
    />
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      {...props}
      className="!first:m-0 bg-beige-300 dark:bg-charcoal-700 my-2 p-4 md:my-4"
    >
      {children}
    </blockquote>
  ),
  pre: ({ ...props }) => (
    <Code
      {...props}
      theme={{
        dark: "dracula-soft",
        light: "solarized-light",
        lightSelector: '[data-theme="light"]',
      }}
      lineNumbers
      codeClassName="whitespace-pre-wrap"
    />
  ),
};
