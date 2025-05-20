import "server-only";
import { revalidateTag } from "next/cache";
import { configureLoader } from "@h1y/next-loader";

export const loader = configureLoader({
  fetch,

  // Server Action 형태이므로 "use server" directive가 포함된다.
  async revalidate(tags) {
    "use server";
    tags.forEach(revalidateTag);
  },
});
