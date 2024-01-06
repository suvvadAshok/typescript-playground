import { expect, test } from "vitest";
import {
  countOccurrences,
  positiveMin,
  sumArrays,
  sumPairs,
} from "./assessment3Refactor";

test("countOccurrences test", () => {
  expect(countOccurrences([1, 1, 2, 1, 2, 3], 1)).toBe(3);
  expect(
    countOccurrences(["a", "s", "h", "o", "k", "a", "a", "s", "s"], "a")
  ).toBe(3);
});

test("sumArrays test", () => {
  expect(sumArrays([1, 2, 3], [4, 5, 6])).toEqual([5, 7, 9]);
  expect(() => sumArrays([3, 4, 5], [7, 8])).toThrow();
});

test("positiveMin test", () => {
  expect(positiveMin([3, 5, -2, -7])).toBe(3);
  expect(positiveMin([-3, -5, -2, -7, 1])).toBe(1);
  expect(positiveMin([-3, -5, -2, -7])).toBe(0);
});

test("sumPairs test", () => {
  expect(sumPairs([1, 9, 3, -4, 7, 14, 5], 10)).toEqual([
    [1, 9],
    [3, 7],
    [-4, 14],
  ]);
});
