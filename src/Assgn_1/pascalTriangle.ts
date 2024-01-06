//const n = 5
export function triangle(n: number): number[][] {
  const arr: number[][] = [];
  for (let i = 0; i < n; i++) {
    const n: number = fact(i);
    const subArr: number[] = [];
    for (let j = 0; j <= i; j++) {
      const p: number = fact(j);
      const t: number = fact(i - j);
      subArr.push(n / (p * t));
    }
    arr.push(subArr);
  }
  return arr;
}
function fact(j: number): number {
  let mult = 1;
  for (let i = 1; i <= j; i++) {
    mult *= i;
  }
  return mult;
}
