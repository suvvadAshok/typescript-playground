import { expect, test } from "vitest";
import { skipWhile } from "./skipWhile";

test("dropWhile test", () => {
  expect(skipWhile([1, 2, 3, 4, 5], n => n > 3)).toEqual([1, 2, 3, 4, 5]);
  expect(() => skipWhile([], n => n > 0)).toThrow();
});
