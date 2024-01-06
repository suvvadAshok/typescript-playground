import { find, pipe } from "@lib";

export function linear_search(arr: readonly number[], num: number): boolean {
  return pipe(
    arr,
    find(i => i === num)
  )
    ? true
    : false;
}

console.log(linear_search([2, 4, 5, 7, 2, 7, 8], 5));
