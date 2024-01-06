import { expect, test } from "vitest";
import { binary_search } from "./binarySearch";

test("binary Search tree", () => {
  expect(binary_search([], 9)).toEqual(false);
  expect(binary_search([1, 2, 3, 4, 5, 6, 7, 8], 9)).toEqual(false);
  expect(binary_search([1, 2, 3, 4, 5, 6, 7, 8], 6)).toEqual(true);
});
