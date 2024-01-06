export function any(arr: number[], fn: (x: number) => boolean): boolean {
  for (const ele of arr) {
    if (fn(ele)) return true;
  }
  return false;
}
