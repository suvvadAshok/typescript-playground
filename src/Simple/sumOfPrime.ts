import { filter, pipe, plus, range, reduce, verify } from "@lib";
import { isPrime } from "src/Simple_Functions/isPrime";
import invariant from "tiny-invariant";
import { z } from "zod";

const posIntSchema = z.number().int().positive();
type Int = z.infer<typeof posIntSchema>;

function* primes(start: number, stop: number): IterableIterator<number> {
  yield* pipe(range(start, stop), filter(isPrime));
}
export function sumOfPrimes(start: Int, stop: Int): number {
  verify(posIntSchema, stop);
  invariant(stop >= 2 && stop > start);
  if (start < 2) start = 2;

  return pipe(primes(start, stop), reduce(plus, 0));
}
