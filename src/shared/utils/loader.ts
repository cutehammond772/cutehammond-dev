import "server-only";
import { revalidateTag } from "next/cache";

import createLoader from "./lib/loader/create-loader";

export const loader = createLoader({
  fetcher: fetch,
  revalidator: async (tag) => {
    "use server";
    revalidateTag(tag);
  },
});
