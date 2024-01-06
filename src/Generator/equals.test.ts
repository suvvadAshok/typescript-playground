import { expect, test } from "vitest";
import { equals } from "./equals";

test("equals test", () => {
  expect(equals([1, 2, 3], [1, 2, 3])).toBe(true);
  expect(equals(new Set([1, 2, true, "Hi"]), new Set([1, 2, true, "Hi"]))).toBe(
    true
  );
  expect(
    equals(
      new Map([
        [1, "a"],
        [2, "b"],
      ]),
      new Map([
        [1, "a"],
        [2, "b"],
      ])
    )
  ).toBe(true);
  expect(equals([1, 2, 3], [1, 2])).toBe(false);
});
