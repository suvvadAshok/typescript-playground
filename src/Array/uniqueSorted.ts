export function uniqueSorted(sorted: readonly number[]): number[] {
  const set = new Set([...sorted]);
  return [...set];
}
