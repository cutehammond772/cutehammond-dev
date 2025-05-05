import "server-only";
import { revalidateTag } from "next/cache";
import { loaderInstance } from "./lib/loader";

export const loader = loaderInstance({
  fetcher: fetch,

  // Server Action 형태이므로 "use server" directive가 포함된다.
  async revalidator(tags) {
    "use server";
    tags.forEach(revalidateTag);
  },
});
