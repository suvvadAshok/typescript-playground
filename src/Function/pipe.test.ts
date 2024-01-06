import { expect, test } from "vitest";
import { pipe } from "./pipe";

test("pipe test", () => {
  expect(
    pipe(
      1,
      n => n + 1,
      n => n + 3
    )
  ).toBe(5);
});
