/* eslint-disable @typescript-eslint/naming-convention */
import { expect, test } from "vitest";
import { collectionEquality } from "./collectionEquality";

test("collectionEquality test", () => {
  expect(collectionEquality([1, 2, 3, 4], [1, 2, 3, 4])).toBe(true);
  expect(collectionEquality([], [])).toBe(true);
  expect(collectionEquality([1, 2, 3, 4], [])).toBe(false);
  expect(collectionEquality([], [1, 2, 3, 4])).toBe(false);
  expect(collectionEquality({ 1: 2, 3: 4 }, { 1: 2, 3: 4 })).toBe(true);
  expect(collectionEquality({}, { 1: 2, 3: 4 })).toBe(false);
  expect(collectionEquality({ 1: 2, 3: 4 }, {})).toBe(false);
});
