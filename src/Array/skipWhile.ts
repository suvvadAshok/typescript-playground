import invariant from "tiny-invariant";

export function skipWhile<T>(arr: T[], method: (x: T) => boolean): T[] {
  invariant(arr.length > 0, "check input");

  let i = 0;
  for (; i < arr.length; i++) {
    if (!method(arr[i])) break;
  }
  return arr.slice(i);
}
