import { expect, test } from "vitest";
import { push } from "./push";

test("push test", () => {
  expect(push([1, 2, 3, 4], 6)).toEqual([1, 2, 3, 4, 6]);
});
