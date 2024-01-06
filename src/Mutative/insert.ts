export function insert<T>(arr: readonly T[], elem: T, index: number): T[] {
  return [...arr.slice(0, index), elem, ...arr.slice(index)];
}
