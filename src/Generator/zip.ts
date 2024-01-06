import { each, pipe, range } from "@lib";

export function zip<T>(fst: Iterable<T>, snd: Iterable<T>): Iterable<T[]> {
  const result: T[][] = [];
  const f = [...fst];
  const s = [...snd];
  const max = f.length > s.length ? f.length : s.length;

  pipe(
    range(max),
    each(i => result.push([f[i], s[i]]))
  );
  return result;
}
