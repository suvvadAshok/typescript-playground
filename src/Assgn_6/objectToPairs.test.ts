import { expect, test } from "vitest";
import { toArray } from "./objectToPairs";

test("objectToPairs test", () => {
  expect(toArray({ a: 1, b: 2 })).toEqual([
    ["a", 1],
    ["b", 2],
  ]);
  expect(toArray({ a: [1, 3], b: 2 })).toEqual([
    ["a", [1, 3]],
    ["b", 2],
  ]);
  expect(toArray({ a: "ashok", b: 2 })).toEqual([
    ["a", "ashok"],
    ["b", 2],
  ]);
});
