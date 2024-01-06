// 13. Write a function `isSorted` with the method signature of
//     `bool isSorted(int arr[])` to check if the passed in array is sorted.

// ```js
// assert(isSorted([]) == true)
// assert(isSorted([1, 3, 2]) == false)
// assert(isSorted([1, 2, 3, 5]) == true)
// ```

function isSort(arr: number[]): boolean {
  //  if (arr.length === 0) return true
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}
isSort([1, 2, 4, 3]);
// console.log(isSort([]))
// console.log(isSort([1, 2, 3, 5]))
