export function mergeWith<T extends object, U extends object, V>(
  fst: T,
  snd: U,
  fn: (x: T[keyof T], y: U[keyof U]) => V
): Record<keyof T & keyof U, V> {
  const obj = {} as Record<keyof T & keyof U, V>;
  for (const e of Object.keys(fst)) {
    if (e in snd)
      obj[e as keyof T & keyof U] = fn(fst[e as keyof T], snd[e as keyof U]);
  }
  return obj;
}
