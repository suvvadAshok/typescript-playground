export function omitObject(
  obj: Record<string, unknown>,
  arr: string[]
): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  let j;
  const keys = Object.keys(obj);
  for (const key of keys) {
    for (j = 0; j < arr.length; j++) {
      if (key === arr[j]) break;
    }
    if (j === arr.length) out[key] = obj[key];
  }
  return out;
}
