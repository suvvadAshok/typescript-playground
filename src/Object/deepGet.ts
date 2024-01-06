export function deepGet(obj: object, keys: string[]): any {
  let result: any = obj;
  for (const ele of keys) {
    if (result === undefined) return null;
    result = result[ele];
  }
  return result;
}
