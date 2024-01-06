import { expect, test } from "vitest";
import { isSorted } from "./isSorted";

test("isSorted test", () => {
  expect(isSorted([2.5, 3, 6, 8, 10])).toBe(true);
  expect(isSorted([2.5, 3, 6, 8, 3, 10])).toBe(false);
  expect(isSorted([-2.5, 3, 6, -8, 3, 10])).toBe(false);
  expect(isSorted([-2.5, 3, 6, 8, 3, 10])).toBe(false);
  expect(isSorted(["a", "b", "c", "d"])).toBe(true);
  expect(isSorted(["ashok", "suvvada", "kumar"])).toBe(false);
  expect(isSorted(["ashok", "kumar", "suvvada"])).toBe(true);
  expect(isSorted([])).toBe(true);
  expect(isSorted([5])).toBe(true);
});
