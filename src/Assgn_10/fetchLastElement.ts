export function fetchLastElement<T>(arr: readonly T[]): T | string {
  if (arr.length === 0) return "valid input";
  return arr[arr.length - 1];
}
