import { expect, test } from "vitest";
import { pairs } from "./pairs";

test("pairs testing", () => {
  expect(pairs([1, 2, 3, 4, 5])).toEqual([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ]);
  expect(pairs([1, 2])).toEqual([[1, 2]]);
  expect(() => pairs([])).toThrow();
  expect(() => pairs([1])).toThrow();
});
