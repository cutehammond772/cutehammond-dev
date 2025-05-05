export interface LoaderModule {
  fetcher: typeof fetch;
  revalidator: (tag: string) => unknown;
}
