import { every, pipe, range } from "@lib";

export function equals<T>(arr1: Iterable<T>, arr2: Iterable<T>): boolean {
  if (arr1 instanceof Array && arr2 instanceof Array)
    return equalVals(arr1, arr2);
  else if (arr1 instanceof Set && arr2 instanceof Set)
    return equalVals([...arr1], [...arr2]);
  else if (arr1 instanceof Map && arr2 instanceof Map) {
    return (
      equalVals([...arr1.keys()], [...arr1.keys()]) &&
      equalVals([...arr1.values()], [...arr2.values()])
    );
  }

  return false;
}

function equalVals<T>(a1: T[], a2: T[]): boolean {
  if (a1.length !== a2.length) return false;

  return pipe(
    range(a1.length),
    every(i => a1[i] === a2[i])
  );
}
