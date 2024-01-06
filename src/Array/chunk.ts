import invariant from "tiny-invariant";

export function chunk(arr: number[], size: number): number[][] {
  invariant(size > 0, "invalid input");
  const a: number[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    a.push(arr.slice(i, i + size));
  }
  return a;
}
