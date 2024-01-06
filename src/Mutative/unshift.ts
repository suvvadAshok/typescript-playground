export function unshift<T>(arr: readonly T[], elem: T): T[] {
  return [elem, ...arr];
}
