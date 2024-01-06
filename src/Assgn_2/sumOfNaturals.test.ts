import { test, expect } from "vitest";
import { sumOfNaturals } from "./sumOfNaturals";

test("sumOfNaturals test", () => {
  expect(sumOfNaturals(1)).toBe(1);
  expect(sumOfNaturals(5)).toBe(15);
  expect(sumOfNaturals(-1)).toBe(undefined);
  expect(sumOfNaturals(0)).toBe(undefined);
});
