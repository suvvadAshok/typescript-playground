import { expect, test } from "vitest";
import { zip } from "./zip";

test("zip test", () => {
  expect(zip(["a", "1"], ["true", "Hi"])).toEqual([
    ["a", "true"],
    ["1", "Hi"],
  ]);
  expect(zip(["a"], ["1", "2"])).toEqual([
    ["a", "1"],
    [undefined, "2"],
  ]);
});
