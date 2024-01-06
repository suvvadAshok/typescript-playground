import { expect, test } from "vitest";
import { shift } from "./shift";

test("shift test", () => {
  expect(shift([1, 2, 3, 4])).toEqual([2, 3, 4]);
});
