export function formObjects(arr: unknown[][]): Record<string, unknown> {
  const obj: Record<string, unknown> = {};
  for (const ele of arr) {
    obj[ele[0] as string] = ele[1];
  }
  return obj;
}
