import { expect, test } from "vitest";
import { remove } from "./remove";

test("remove test", () => {
  expect(remove([1, 2, 3, 4], 2)).toEqual([1, 2, 4]);
});
