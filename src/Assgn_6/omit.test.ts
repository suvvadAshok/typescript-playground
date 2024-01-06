import { expect, test } from "vitest";
import { omitObject } from "./omit";

test("omit tesst", () => {
  expect(omitObject({ a: 1, b: "2", c: 3 }, ["b"])).toEqual({ a: 1, c: 3 });
  expect(omitObject({ a: 1, b: "2", c: 3 }, ["b", "c"])).toEqual({ a: 1 });
});
