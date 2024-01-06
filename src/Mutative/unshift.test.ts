import { expect, test } from "vitest";
import { unshift } from "./unshift";

test("unshift test", () => {
  expect(unshift([2, 3, 4], 5)).toEqual([5, 2, 3, 4]);
});
