export function copy<T>(arr: readonly T[]): T[] {
  const arr1: T[] = [...arr];
  return arr1;
}
