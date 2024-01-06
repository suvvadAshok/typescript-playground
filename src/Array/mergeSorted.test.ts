import { expect, test } from "vitest";
import { mergeSorted } from "./mergeSorted";

test("mergeSorted test", () => {
  expect(mergeSorted([2, 2, 3, 5], [])).toEqual([5, 3, 2, 2]);
  expect(mergeSorted([], [2, 3, 5])).toEqual([5, 3, 2]);
  expect(mergeSorted([2, 2, 3, 5], [2, 3])).toEqual([5, 3, 3, 2, 2, 2]);
  expect(mergeSorted([], [])).toEqual([]);
  expect(() => mergeSorted([2.4, 2.5, 6], [])).toThrow();
});
