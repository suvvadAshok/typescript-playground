import { test, expect } from "vitest";
import { pluck } from "./pluck";

test("pluck test", () => {
  expect(
    pluck(
      [
        { name: "lisa", age: 8 },
        { name: "homer", age: 36 },
        { name: "marge", age: 34 },
        { name: "bart", age: 10 },
      ],
      "age"
    )
  ).toEqual([8, 36, 34, 10]);
});
