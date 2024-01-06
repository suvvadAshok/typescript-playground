import { expect, test } from "vitest";
import { power } from "./powerFinder";

test("power test", () => {
  expect(power(2, 5)).toBe(32);
  expect(power(5, 0)).toBe(1);
  expect(power(0, 4)).toBe(0);
  expect(power(-2, 5)).toBe(-32);
  expect(power(2, -5)).toBe(0.03125);
  expect(power(2.5, 2)).toBe(6.25);
  expect(() => power(2, 2.5)).toThrow();
  expect(power(-2, 4)).toBe(16);
});
