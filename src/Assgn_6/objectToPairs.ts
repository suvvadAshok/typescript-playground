// 2. Implement `objectToPairs`. Creates an array of key-value pair arrays from an
//    object.

// ```js
// objectToPairs({ a: 1, b: 2 }) // [ ['a', 1], ['b', 2] ]
// ```
export function toArray(obj: Record<string, unknown>): any {
  const arr = Object.entries(obj);
  return arr;
}
