export function duplicates(arr: readonly number[]): number[] {
  const newArr: number[] = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) newArr.push(arr[i]);
  }
  newArr.push(arr[arr.length - 1]);
  return newArr;
}
//console.log(duplicates([2, 4, 5, 6, 6, 7, 8, 8]))
