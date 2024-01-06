/* eslint-disable @typescript-eslint/naming-convention */
import { expect, test } from "vitest";
import { formObjects } from "./objectsFromPairs";

test("objectFromPairs test", () => {
  expect(
    formObjects([
      [1, 2],
      [3, 4],
    ])
  ).toEqual({ "1": 2, "3": 4 });
});
