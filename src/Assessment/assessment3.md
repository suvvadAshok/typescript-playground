1.

```ts
import invariant from "tiny-invariant";

function countOccurrences(arr: number[], n: number): number {
  invariant(arr.length > 0, "give array");

  let count = 0;
  for (const ele of arr) {
    if (ele === n) count++;
  }
  return count;
}
```

---

2.

```ts
function sumArrays(arr1: number[], arr2: number[]): number[] {
  invariant(arr1.length === arr2.length, "make sure arrays have equal size");

  const result: number[] = [];
  for (let i = 0; i < arr1.length; i++) {
    result[i] = arr1[i] + arr2[i];
  }
  return result;
}
```

---

3.

```ts
function positiveMin(arr: number[]) {
  arr.sort();

  for (const ele of arr) {
    if (ele > 0) return ele;
  }
  return -1;
}
```

---

4.

```ts
function sumPairs(arr: number[], sum: number): number[][] {
  invariant(sum > 0, "enter grater than 0");

  const result: number[][] = [];
  const k = 0;
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
```

---

5.

```ts
function cycle(n: number, arr: number[]) {
  invariant(n > 0, "enter grater than 0");

  const result: number[] = [];
  while (n - arr.length > result.length) {
    result.push(...arr);
  }
  if (n > result.length) {
    result.push(...arr.slice(0, n - result.length));
  }
  return result;
}
```
