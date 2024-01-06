import { z } from "zod";
const numSchema = z.number().array();
type Numb = z.infer<typeof numSchema>;

export function areEqualArrays(arr1: Numb, arr2: Numb): boolean | undefined {
  if (!numSchema.safeParse(arr1).success || !numSchema.safeParse(arr2).success)
    return undefined;
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
