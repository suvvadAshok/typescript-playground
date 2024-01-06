import { expect, test } from "vitest";
import { replace } from "./replace";

test("replace test", () => {
  expect(replace([2, 3, 4, 5], 9, 2)).toEqual([2, 3, 9, 5]);
});
