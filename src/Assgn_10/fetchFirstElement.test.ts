import { expect, test } from "vitest";
import { fetchFirstElement } from "./fetchFirstElement";

test("fetching first element", () => {
  expect(fetchFirstElement([1, 2, 3, 5, 6])).toBe(1);
  expect(fetchFirstElement(["as", "sa", "sak"])).toBe("as");
  expect(fetchFirstElement([])).toBe("valid input");
});
