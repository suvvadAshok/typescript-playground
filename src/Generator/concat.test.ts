import { expect, test } from "vitest";
import { concat } from "./concat";

test("chain test", () => {
  expect(concat([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});
