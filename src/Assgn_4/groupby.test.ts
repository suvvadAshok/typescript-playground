/* eslint-disable @typescript-eslint/naming-convention */
import { expect, test } from "vitest";
import { groupBy } from "./groupby";

test("groupby test", () => {
  expect(groupBy([6.1, 4.2, 6.3], x => Math.floor(x))).toEqual({
    "4": [4.2],
    "6": [6.1, 6.3],
  });
  expect(groupBy(["one", "two", "three"], x => x.length)).toEqual({
    "3": ["one", "two"],
    "5": ["three"],
  });
});
