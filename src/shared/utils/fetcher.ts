export default function fetcher(...tags: string[]): typeof fetch {
  return (input: string | URL | Request, init?: RequestInit) =>
    fetch(input, { ...init, next: { tags } });
}
