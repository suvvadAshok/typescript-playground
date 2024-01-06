import { test, expect } from "vitest";
import { areEqualArrays } from "./areEqualArrays";

test("areEqualArrays test", () => {
  expect(areEqualArrays([1, 2, 3.5], [1, 2, 3.5])).toBe(true);
  expect(areEqualArrays([], [1, 2, 3.5])).toBe(false);
  expect(areEqualArrays([], [])).toBe(true);
  expect(areEqualArrays([1, -2, 3.5], [1, -2, 3.5])).toBe(true);
  expect(areEqualArrays([1, 5, 3.5], [1, 2, 3.5])).toBe(false);
  expect(areEqualArrays([1, 2, 3.5], [])).toBe(false);
});
