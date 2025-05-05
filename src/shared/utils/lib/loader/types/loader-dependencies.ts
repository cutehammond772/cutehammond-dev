export interface LoaderDependencies {
  fetcher: typeof fetch;
  revalidator: (tags: string[]) => Promise<void>;
}
