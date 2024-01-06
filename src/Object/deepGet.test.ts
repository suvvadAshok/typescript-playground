import { expect, test } from "vitest";
import { deepGet } from "./deepGet";

test("deepget test", () => {
  expect(
    deepGet(
      {
        foo: {
          foz: [1, 2, 3],
          bar: {
            baz: ["a", "b", "c"],
          },
        },
      },
      ["foo", "foz", "2"]
    )
  ).toBe(3);
});
