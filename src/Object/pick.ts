export function pick<T extends object, K extends keyof T>(
  obj: T,
  keys: readonly K[]
): Pick<T, K> {
  const output = {} as Pick<T, K>;
  for (const ele of keys) {
    if (ele in obj) output[ele] = obj[ele];
  }

  return output;
}
