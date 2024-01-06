type Fn = (...args: any[]) => any;
export function once(fn: Fn): Fn {
  let execute = false;
  return function (...args: any[]): any {
    if (execute) return undefined;
    execute = true;
    return fn(...args);
  };
}
