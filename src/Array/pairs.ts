import { verify } from "@lib";
import invariant from "tiny-invariant";
import { z } from "zod";
const intSchema = z.number().int().array();
type Int = z.infer<typeof intSchema>;

export function pairs(arr: Int): Int[] {
  verify(intSchema, arr);
  invariant(arr.length > 1, "please check array size");

  const result: Int[] = [];
  for (let i = 0; i < arr.length - 1; i++) {
    result.push(arr.slice(i, i + 2));
  }
  return result;
}
