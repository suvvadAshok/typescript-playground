import { z } from "zod";
const naturalSchema = z.number().positive();
type Natural = z.infer<typeof naturalSchema>;

export function sumOfNaturals(n: Natural): Natural | undefined {
  if (!naturalSchema.safeParse(n).success) return undefined;
  const arr: number[] = range(n);
  return arr.reduce((sum, ele) => sum + ele, 0);
}
function range(range: number): number[] {
  const arr: number[] = [];
  for (let i = 1; i <= range; i++) {
    arr[i] = i;
  }
  return arr;
}
