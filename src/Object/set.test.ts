import { expect, test } from "vitest";
import { set } from "./set";

test("set test", () => {
  expect(set({ a: 1, b: 2 }, "b", 4)).toEqual({ a: 1, b: 4 });
});
