import { expect, test } from "vitest";
import { linear_search } from "./linearSearch";

test("linear search", () => {
  expect(linear_search([2, 4, 5, 7, 2, 7, 8], 5)).toEqual(true);
});
