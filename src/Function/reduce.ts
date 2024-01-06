export function reduce(
  arr: readonly any[],
  fn: (acc: any, elem: any) => any,
  init: any
): any {
  let result = init;
  for (const e of arr) {
    result = fn(result, e);
  }
  return result;
}
