import { z } from "zod/v4";

export const HeadingMeta = z.object({
  depth: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  content: z.string(),
});

export type HeadingMeta = z.infer<typeof HeadingMeta>;
