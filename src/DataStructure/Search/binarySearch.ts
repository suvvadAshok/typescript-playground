export function binary_search(arr: number[], num: number): boolean {
  let small = 0,
    large = arr.length - 1;

  while (small < large) {
    if (num === arr[small] || num === arr[large]) return true;

    const middle = Math.floor(small + (large - small) / 2);

    if (num > arr[middle]) {
      small = middle + 1;
    } else {
      large = middle;
    }
  }
  return false;
}
