import { each, pipe } from "@lib";

export function concat<T>(...arrs: Array<Iterable<T>>): Iterable<T> {
  const array: T[] = [];
  pipe(
    arrs,
    each(e => array.push(...e))
  );
  return array;
}
