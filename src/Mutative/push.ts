export function push<T>(arr: readonly T[], elem: T): T[] {
  return [...arr, elem];
}
