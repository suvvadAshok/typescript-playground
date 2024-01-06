import { expect, test } from "vitest";
import { reduce } from "./reduce";

test("reduce test", () => {
  expect(reduce([2, 3, 4, 5], (acc, ele) => acc * ele, 0)).toBe(0);
  expect(reduce([2, 3, 4, 5], (acc, ele) => acc * ele, 1)).toBe(120);
});
