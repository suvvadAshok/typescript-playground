import { expect, test } from "vitest";
import { once } from "./once";

test("once test", () => {
  const addOnce = once((x: number, y: number) => x + y);
  expect(addOnce(1, 2)).toBe(3);
  expect(addOnce(1, 2)).toBe(undefined);
});
