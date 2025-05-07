import "server-only";
import { revalidateTag } from "next/cache";
import { loaderInstance } from "./loader";

export const loader = loaderInstance({
  fetch,

  // Server Action 형태이므로 "use server" directive가 포함된다.
  async revalidate(tags) {
    "use server";
    tags.forEach(revalidateTag);
  },
});
