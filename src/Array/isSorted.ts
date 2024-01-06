import { every, pipe, range, verify } from "@lib";
import { z } from "zod";
const numSchema = z.number().or(z.string()).array();

type Utype = z.infer<typeof numSchema>;

export const isSorted = (arr: Utype): boolean => {
  verify(numSchema, arr);

  if (arr.length <= 1) return true;

  return pipe(
    range(1, arr.length),
    every(j => arr[j - 1] < arr[j])
  );
};
