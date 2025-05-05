export default function hierarchy(...tags: string[]): string[] {
  const [prefix, ...rest] = tags;

  if (rest.length === 0) return [prefix];

  return [prefix, ...hierarchy(...rest).map((tag) => `${prefix}/${tag}`)];
}
