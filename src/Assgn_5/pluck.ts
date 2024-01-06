// function pluck(simpsons, age) {}
// pluck(simpsons, 'age') // [8, 36, 34, 10]
export function pluck<T extends Record<any, unknown>>(
  simpsons: T[],
  key: string
): unknown[] {
  const output = simpsons.map((x: any) => x[key]);
  return output;
}
