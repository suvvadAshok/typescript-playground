import { expect, test } from "vitest";
import { fetchLastElement } from "./fetchLastElement";

test("fetching last element", () => {
  expect(fetchLastElement([1, 2, 3, 5, 6])).toBe(6);
  expect(fetchLastElement(["as", "sa", "sak"])).toBe("sak");
  expect(fetchLastElement([])).toBe("valid input");
});
