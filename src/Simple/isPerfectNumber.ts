import { filter, pipe, plus, range, reduce, verify } from "@lib";
import { z } from "zod";
const posIntSchema = z.number().int().positive();
type PosInt = z.infer<typeof posIntSchema>;

export const isPerfect = (n: PosInt): boolean => {
  verify(posIntSchema, n);

  return (
    pipe(
      range(n),
      filter(i => n % i === 0),
      reduce(plus, 0)
    ) === n
  );
};
