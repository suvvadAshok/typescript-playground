export function fetchFirstElement<T>(arr: readonly T[]): T | string {
  if (arr.length === 0) return "valid input";
  return arr[0];
}
