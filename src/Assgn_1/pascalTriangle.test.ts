import { test, expect } from "vitest";
import { triangle } from "./pascalTriangle";

test("pascalTriangle test", () => {
  expect(triangle(0)).toEqual([]);
  expect(triangle(1)).toEqual([[1]]);
  expect(triangle(2)).toEqual([[1], [1, 1]]);
  expect(triangle(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
});
