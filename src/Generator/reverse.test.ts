import { expect, test } from "vitest";
import { reverse } from "./reverse";

test("reverse test", () => {
  expect(reverse([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
  expect(() => reverse([])).toThrow();
});
