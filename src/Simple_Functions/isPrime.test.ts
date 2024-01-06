import { expect, test } from "vitest";
import { isPrime } from "./isPrime";

test("isPrime test", () => {
  expect(() => isPrime(0)).toThrow();
  expect(() => isPrime(1)).toThrow();
  expect(() => isPrime(4.5)).toThrow();
  expect(() => isPrime(-3)).toThrow();
  expect(isPrime(2)).toBe(true);
  expect(isPrime(97)).toBe(true);
  expect(isPrime(56)).toBe(false);
});
