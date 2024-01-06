import { every, pipe, range, verify } from "@lib";
import invariant from "tiny-invariant";
import { z } from "zod";
const posIntSchema = z.number().int().positive();
type Int = z.infer<typeof posIntSchema>;

export function isPrime(n: Int): boolean {
  verify(posIntSchema, n);
  invariant(n > 1, "expect greater than 1");

  return pipe(
    range(2, n),
    every(i => n % i !== 0)
  );
}
