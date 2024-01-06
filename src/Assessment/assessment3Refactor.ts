import { filter, map, pipe, range, reduce, toArray } from "@lib";
import invariant from "tiny-invariant";

export function countOccurrences<T>(arr: T[], n: T): number {
  invariant(arr.length > 0, "give array");

  return pipe(
    arr,
    filter(e => e === n),
    reduce(count => count + 1, 0)
  );
}

//sumArrays([1, 2, 3], [4, 5, 6]); // output: [5, 7, 9]

export function sumArrays(arr1: number[], arr2: number[]): number[] {
  invariant(arr1.length === arr2.length, "make sure arrays have equal size");

  return pipe(
    range(arr1.length),
    map(i => arr1[i] + arr2[i]),
    toArray
  );
}

//positiveMin([2, -2, 1, 4]); //1;

export function positiveMin(arr: number[]) {
  invariant(arr.length > 0, "give an array");

  const result = pipe(
    arr,
    filter(e => e > 0),
    toArray
  );
  if (result.length === 0) return 0;
  return result[0];
}

// sumPairs([1, 9, 3, -4, 7, 14, 5], 10) // output:  [[1, 9], [3, 7], [-4, 14]])

export function sumPairs(arr: number[], sum: number): number[][] {
  invariant(sum !== 0, "sum must not be `0` ");

  const result: number[][] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum === arr[i] + arr[j]) {
        result.push([arr[i], arr[j]]);
        arr[i] = 0;
        arr[j] = 0;
        break;
      }
    }
  }
  return result;
}

export function* cycle<T>(arr: T[]): IterableIterator<T> {
  for (let i = 0; ; i++) {
    yield arr[i % arr.length];
  }
}

// console.log(...itake(cycle([1, 2, 3, 5]), 7));
// console.log(...itake(cycle(["a", "s", "h", "o", "k"]), 7));
