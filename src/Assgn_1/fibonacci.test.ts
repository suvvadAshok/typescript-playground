import { test, expect } from "vitest";
import { fib } from "./fibonacci";

test("fibonacci test", () => {
  expect(fib(5, 0, 1, [0, 1])).toEqual([0, 1, 1, 2, 3, 5]);
  expect(fib(10, 1, 1, [1, 1])).toEqual([1, 1, 2, 3, 5, 8]);
});
