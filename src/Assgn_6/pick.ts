export function pickup(
  obj: Record<string, unknown>,
  arr: string[]
): Record<string, unknown> {
  const output: Record<string, unknown> = {};
  for (const ele of arr) {
    if (ele in obj) output[ele] = obj[ele];
  }
  return output;
}
