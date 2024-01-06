import { expect, test } from "vitest";
import { isPrime } from "./isPrime";

test("isPrime test", () => {
  expect(isPrime(0)).toBe(false);
  expect(isPrime(1)).toBe(false);
  expect(isPrime(97)).toBe(true);
});
