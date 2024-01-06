export function replace<T>(arr: readonly T[], elem: T, index: number): T[] {
  return [...arr.slice(0, index), elem, ...arr.slice(index + 1)];
}
