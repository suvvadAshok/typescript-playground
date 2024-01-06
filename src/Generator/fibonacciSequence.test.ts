import { expect, test } from "vitest";
import { fibonacci } from "./fibonacciSequence";

function finalfib(n: number) {
  return [...fibonacci(n)];
}
test("fibonacciSequence test", () => {
  expect(() => finalfib(0)).toThrow();
  expect(() => finalfib(-3)).toThrow();
  expect(finalfib(1)).toEqual([0, 1]);
  expect(finalfib(5)).toEqual([0, 1, 1, 2, 3]);
  expect(finalfib(10)).toEqual([0, 1, 1, 2, 3, 5, 8]);
});
