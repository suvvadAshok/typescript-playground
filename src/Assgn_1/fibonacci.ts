export function fib(n: number, a: number, b: number, arr: number[]): number[] {
  let c = 0;
  let bool = true;
  while (bool) {
    c = a + b;
    if (c <= n) arr.push(c);
    else bool = false;
    a = b;
    b = c;
  }
  return arr;
}
