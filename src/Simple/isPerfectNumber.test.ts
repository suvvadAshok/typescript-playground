import { expect, test } from "vitest";
import { isPerfect } from "./isPerfectNumber";

test("isPerfectNumber test", () => {
  expect(isPerfect(28)).toBe(true);
  expect(isPerfect(27)).toBe(false);
  expect(() => isPerfect(-2)).toThrow();
  expect(() => isPerfect(0)).toThrow();
  expect(isPerfect(1)).toBe(false);
});
