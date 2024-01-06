import { expect, test } from "vitest";
import { mergeWith } from "./mergeWith";

test("mergeWith test", () => {
  expect(mergeWith({ a: 2, b: 3 }, { a: 3, b: 4 }, (x, y) => x + y)).toEqual({
    a: 5,
    b: 7,
  });
});
