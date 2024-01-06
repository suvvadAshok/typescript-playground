type Fn = (...args: any[]) => any;
export function partial(fn: Fn, ...args: any[]): (...rest: any[]) => any {
  return (...rest: any[]): any => {
    return fn(...[...args, ...rest]);
  };
}
