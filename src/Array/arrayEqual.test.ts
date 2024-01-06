import { expect, test } from "vitest";
import { arrayEqual } from "./arrayEqual";

test("arrayEqual test", () => {
  expect(arrayEqual([], [])).toBe(true);
  expect(arrayEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  expect(arrayEqual([1, 2, 3], [2, 1, 3])).toBe(false);
});
