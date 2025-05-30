import { z } from "zod/v4";

export const Article = z.object({
  title: z.string(),
  content: z.string(),
  tag: z.array(z.string()),
  createdDate: z.date(),
  modifiedDate: z.date(),
});

export type Article = z.infer<typeof Article>;
