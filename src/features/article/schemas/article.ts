import { z } from "zod/v4";

// 메타데이터를 별도로 둔다면 어떨까...
export const ArticleMetadata = z.object({
  id: z.string(),
  title: z.string(),
  tag: z.array(z.string()).default([]),
  description: z.string().default(""),
  createdDate: z.date(),
  modifiedDate: z.date(),
});

export const Article = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  tag: z.array(z.string()),
  description: z.string(),
  createdDate: z.date(),
  modifiedDate: z.date(),
});

export type Article = z.infer<typeof Article>;
