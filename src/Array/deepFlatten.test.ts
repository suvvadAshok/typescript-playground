import { expect, test } from "vitest";
import { deepFlatten } from "./deepFlatten";

test("deepFlatten test", () => {
  expect(deepFlatten([1, [2], [[3], 4], 5])).toEqual([1, 2, 3, 4, 5]);
});
