```typescript
export function map<T, U>(arr: T[], fn: (x: T) => U): U[] {}

export function filter<T>(arr: T[], predicate: (x: T) => T): T[] {}

export function reduce<T, U>(arr: T[], fn: (acc: U, x: T) => U,init:T): U { }

export function get<T extends Object, U extends keyOf T> (obj: T, key:U): T {}

export function pick<T extends Object, U extends keyOf T> (obj: T, keys:U[]): T {}

export function omit<T extends Object, U extends keyOf T> (obj: T, keys:U[]): T {}

export function groupBy<T>(arr:T[],fn:()=>U):U[]{}

export function deepFlatten<T>(arr:T):T[]{}

export function partial(fn:()=>T,...args:any): (...rest: any[])=> any;

export function pipe<T>(src:T,...fns:()=>U):T{};
```
