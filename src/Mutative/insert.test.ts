import { expect, test } from "vitest";
import { insert } from "./insert";

test("insert test", () => {
  expect(insert([1, 2, 3, 5, 6], 4, 3)).toEqual([1, 2, 3, 4, 5, 6]);
});
