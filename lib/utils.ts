export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function padIndex(index: number, digits = 2) {
  return String(index + 1).padStart(digits, "0");
}

export function padCount(count: number, digits = 2) {
  return String(Math.max(count, 0)).padStart(digits, "0");
}

export function splitCategoryName(name: string) {
  const match = name.match(/^(.*?)\s*\((.+)\)\s*$/);
  if (!match) return { title: name, aside: null as string | null };
  return { title: match[1], aside: match[2] };
}
