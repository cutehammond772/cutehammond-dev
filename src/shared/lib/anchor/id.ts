export function generateId(content: string) {
  return `${content.toLowerCase().replace(/\s+/g, "-")}`;
}
