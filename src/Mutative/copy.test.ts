import { expect, test } from "vitest";
import { copy } from "./copy";

test("copy test", () => {
  expect(copy([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
});
