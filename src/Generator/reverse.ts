import { each, pipe, range } from "@lib";
import invariant from "tiny-invariant";

export function reverse<T>(arr: readonly T[]): Iterable<T> {
  invariant(arr.length > 0, "check input");

  const reverseArr: T[] = [];
  pipe(
    range(arr.length),
    each(e => reverseArr.push(arr[arr.length - e - 1]))
  );
  return reverseArr;
}
