import { expect, test } from "vitest";
import { sumOfPrimes } from "./sumOfPrime";

test("sumOfPrimes test", () => {
  expect(sumOfPrimes(4, 12)).toBe(23);
  expect(sumOfPrimes(0, 12)).toBe(28);
  expect(sumOfPrimes(1, 12)).toBe(28);
  expect(() => sumOfPrimes(0, 1)).toThrow();
  expect(sumOfPrimes(-5, 12)).toBe(28);
  expect(() => sumOfPrimes(-3, -6)).toThrow();
  expect(() => sumOfPrimes(-6, -3)).toThrow();
  expect(() => sumOfPrimes(-10, 0)).toThrow();
});
