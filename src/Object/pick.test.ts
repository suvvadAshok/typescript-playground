import { expect, test } from "vitest";
import { pick } from "./pick";

test("pick test", () => {
  expect(pick({ a: 1, b: 2 }, ["a"])).toEqual({ a: 1 });
});
