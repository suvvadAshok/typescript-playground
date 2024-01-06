const arr1: number[][] = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];
const arr2: number[][] = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];
const c: number[][] = [];
for (let i = 0; i < 3; i++) {
  const arr: number[] = [];
  for (let j = 0; j < 3; j++) {
    let s = 0;
    for (let k = 0; k < 3; k++) {
      s += arr1[i][k] * arr2[k][j];
    }
    arr.push(s);
  }
  c.push(arr);
}
//console.log(c)
