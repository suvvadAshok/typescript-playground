import { map, pipe, range, reduce, verify } from "@lib";
import { z } from "zod";
const posIntSchema = z.number().int();
type PosInt = z.infer<typeof posIntSchema>;

export const power = (x: number, y: PosInt): number => {
  verify(posIntSchema, y);

  if (y === 0) return 1;
  if (x === 0) return 0;
  if (y < 0) {
    y *= -1;
    return 1 / powerFinder(x, y);
  } else return powerFinder(x, y);
};

const powerFinder = (x: number, y: PosInt): number => {
  return pipe(
    range(y),
    map(() => x),
    reduce((x, b) => x * b, 1)
  );
};
