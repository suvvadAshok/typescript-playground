import { expect, test } from "vitest";
import { bubleSort } from "./bubleSort";

test("bublesort Test", () => {
  expect(bubleSort([])).toEqual([]);
  expect(bubleSort([10])).toEqual([10]);
  expect(bubleSort([10, 43, 15, 23, 70, 1, 5])).toEqual([
    1, 5, 10, 15, 23, 43, 70,
  ]);
});
