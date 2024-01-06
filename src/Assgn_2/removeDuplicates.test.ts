import { test, expect } from "vitest";
import { duplicates } from "./removeDuplicates";

test("removeDuplicates test", () => {
  expect(duplicates([2, 4, 5, 6, 6, 7, 8, 8])).toEqual([2, 4, 5, 6, 7, 8]);
  expect(duplicates([2, 2, 2, 4, 5, 6, 6, 7, 8, 8])).toEqual([
    2, 4, 5, 6, 7, 8,
  ]);
  expect(duplicates([2, 4, 5, 6, 7, 8])).toEqual([2, 4, 5, 6, 7, 8]);
});
