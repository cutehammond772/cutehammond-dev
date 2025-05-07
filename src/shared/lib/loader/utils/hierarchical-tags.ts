export default function hierarchicalTags(...tags: string[]): string[] {
  const [prefix, ...rest] = tags;

  if (rest.length === 0) return [prefix];

  return [
    prefix,
    ...hierarchicalTags(...rest).map((tag) => `${prefix}/${tag}`),
  ];
}
