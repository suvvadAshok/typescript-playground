export function groupBy<T>(
  arr: T[],
  func: (x: T) => number
): Record<string, unknown[]> {
  const result = {} as Record<string, unknown[]>;
  for (const ele of arr) {
    const key = func(ele);
    if (key in result) result[key].push(ele);
    else result[key] = [ele];
  }
  return result;
}
