export function pop<T>(arr: readonly T[]): T[] {
  return arr.slice(0, arr.length - 1);
}
