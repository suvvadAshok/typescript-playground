import { expect, test } from "vitest";
import { pascalTriangle } from "./pascalTriangle";

function triangle(n: number): number[][] {
  const result: number[][] = [];
  for (const e of pascalTriangle(n)) {
    result.push([...e]);
  }

  return result;
}

test("pascalTriangle test", () => {
  expect(() => triangle(0)).toThrow();
  expect(triangle(1)).toEqual([[1]]);
  expect(triangle(2)).toEqual([[1], [1, 1]]);
  expect(triangle(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
});
