import { every, pipe, range } from "@lib";

export function arrayEqual(
  first: readonly number[],
  second: readonly number[]
): boolean {
  if (first.length !== second.length) return false;

  return pipe(
    range(first.length),
    every(i => first[i] === second[i])
  );
}
