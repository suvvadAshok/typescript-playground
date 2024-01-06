import { expect, test } from "vitest";
import { compact } from "./compact";

test("compact test", () => {
  expect(
    compact([0, 1, false, 2, "", 3, "a", ("e" as any) * 23, NaN, "s", 34])
  ).toEqual([1, 2, 3, "a", "s", 34]);

  expect(compact([])).toEqual([]);
});
