type Fn = (...args: any[]) => any;
export function pipe<T>(src: T, ...fns: Fn[]): any {
  let result: any = src;
  for (const func of fns) {
    result = func(result);
  }
  return result;
}
