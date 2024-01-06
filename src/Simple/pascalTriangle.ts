import { map, mul, pipe, range, reduce, verify } from "@lib";
import invariant from "tiny-invariant";
import { z } from "zod";
const posIntSchema = z.number().int().positive();

export function* pascalTriangle(
  lines: number
): IterableIterator<IterableIterator<number>> {
  verify(posIntSchema, lines);
  invariant(lines > 0, "check input");

  yield* pipe(
    range(0, lines),
    map(i => pascalLine(i))
  );
}

function* pascalLine(line: number): IterableIterator<number> {
  yield* pipe(
    range(0, line + 1),
    map(j => ncr(line, j))
  );
}

function ncr(n: number, r: number): number {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

function factorial(n: number): number {
  if (n === 0) return 1;
  return pipe(range(1, n + 1), reduce(mul, 1));
}
