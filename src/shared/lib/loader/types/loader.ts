export interface Loader {
  fetch: typeof fetch;
  revalidate: (tags: string[]) => Promise<void>;
}
