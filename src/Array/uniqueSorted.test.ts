import { expect, test } from "vitest";
import { uniqueSorted } from "./uniqueSorted";

test("uniqueSorted test", () => {
  expect(uniqueSorted([1, 1, 2, 2, 2, 3, 3, 3, 3, 5])).toEqual([1, 2, 3, 5]);
});
