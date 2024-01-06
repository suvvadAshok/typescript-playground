export function deepFlatten<T>(arr: T[]): T[] {
  const result: any = [];
  for (const e of arr) {
    Array.isArray(e)
      ? deepFlatten(e).forEach(e => result.push(e))
      : result.push(e);
  }
  return result;
}
