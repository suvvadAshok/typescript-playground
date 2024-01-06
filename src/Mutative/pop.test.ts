import { expect, test } from "vitest";
import { pop } from "./pop";

test("pop test", () => {
  expect(pop([1, 2, 3, 4])).toEqual([1, 2, 3]);
});
