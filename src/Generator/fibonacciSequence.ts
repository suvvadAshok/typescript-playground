import invariant from "tiny-invariant";
import { z } from "zod";
const intSchema = z.number().int().positive();
type PosInt = z.infer<typeof intSchema>;

//here n is number in the sequence limit not number of entries
export const fibonacci = function* (n: PosInt): IterableIterator<number> {
  invariant(n > 0, "terminate");

  let first = 0,
    second = 1,
    next = 0;
  yield 0;
  yield 1;
  while (next < n) {
    next = first + second;
    if (next < n) yield next;
    first = second;
    second = next;
  }
};
