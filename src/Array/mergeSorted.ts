import { verify } from "@lib";
import { z } from "zod";
const intSchema = z.number().int().array();
type Int = z.infer<typeof intSchema>;

export function mergeSorted(sorted1: Int, sorted2: Int): Int {
  verify(intSchema, sorted1);
  verify(intSchema, sorted2);
  if (sorted1.length === 0) return reverse(sorted2);
  if (sorted2.length === 0) return reverse(sorted1);
  const result: Int = [];
  let j = sorted2.length - 1;
  let i = sorted1.length - 1;
  for (i = sorted1.length - 1; i >= 0; i--) {
    if (sorted1[i] === sorted2[j]) {
      result.push(sorted1[i], sorted2[j]);
      j--;
    } else if (sorted1[i] > sorted2[j]) result.push(sorted1[i]);
    else {
      result.push(sorted2[j]);
      i++;
      j--;
    }
    if (j === -1) {
      result.push(...sorted1.slice(0, i));
      break;
    }
  }

  if (j >= 0) result.push(...sorted2.slice(0, j));

  return result;
}
function reverse(arr: Int): Int {
  const result: Int = [];
  for (let i = arr.length - 1; i >= 0; i--) result.push(arr[i]);
  return result;
}
