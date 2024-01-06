import { expect, test } from "vitest";
import { isDateValid } from "./dateValid";

test("dateValid test", () => {
  expect(isDateValid(1900, 2, 28)).toBe(true);
  expect(isDateValid(1999, 12, 3)).toBe(true);
  expect(isDateValid(2024, 2, 29)).toBe(true);
  expect(isDateValid(1700, 2, 29)).toBe(false);
  expect(isDateValid(1999, 12, 32)).toBe(false);
  expect(isDateValid(2000, 13, 3)).toBe(false);
  expect(isDateValid(1999, 12, 0)).toBe(false);
  expect(isDateValid(1999, 0, 3)).toBe(false);
  expect(isDateValid(0, 12, 3)).toBe(false);
});
